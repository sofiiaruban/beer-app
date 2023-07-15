import React from "react";
import styles from "./DescriptionLists.module.css";

interface DescriptionListsProps {
  data: Record<string, any>;
}

function DescriptionLists({ data }: DescriptionListsProps) {
  const generateIngredientsList = (ingredients: Record<string, any>) => {
    return Object.entries(ingredients).map(([key, value]) => {
      if (value === null || value === undefined) {
        return null;
      }

      if (Array.isArray(value)) {
        const innerItems = value.map(
          (item: Record<string, any>, index: number) => {
            const { name, amount } = item;
            if (name && amount && amount.value && amount.unit) {
              return (
                <React.Fragment key={index}>
                  <dt>
                    {name} - {amount.value} {amount.unit}
                  </dt>
                </React.Fragment>
              );
            }
            return null;
          }
        );

        return (
          <React.Fragment key={key}>
            <dt className={styles.title}>{key}</dt>
            {innerItems}
          </React.Fragment>
        );
      }

      if (typeof value === "object") {
        return (
          <React.Fragment key={key}>
            <dt>{key}</dt>
            <dd>
              <dl>{generateIngredientsList(value)}</dl>
            </dd>
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={key}>
          <dt className={styles.title}>{key}</dt>
          <dd>{value}</dd>
        </React.Fragment>
      );
    });
  };

  const generateMethodList = (method: Record<string, any>) => {
    return Object.entries(method).map(([key, value]) => {
      if (value === null || value === undefined) {
        return null;
      }

      if (typeof value === "object") {
        if (key === "mash_temp") {
          const innerItems = value.map(
            (item: Record<string, any>, index: number) => {
              const { temp, duration } = item;
              if (temp && temp.value && temp.unit && duration) {
                return (
                  <React.Fragment key={index}>
                    <dt className={styles.title}>Mash Temperature</dt>
                    <dd>
                      <dl>
                        <dt>
                          Temperature - {temp.value} {temp.unit}
                        </dt>
                        <dt>Duration - {duration} min</dt>
                      </dl>
                    </dd>
                  </React.Fragment>
                );
              }
              return null;
            }
          );

          return <React.Fragment key={key}>{innerItems}</React.Fragment>;
        }

        if (key === "fermentation") {
          const { temp } = value;
          if (temp && temp.value && temp.unit) {
            return (
              <React.Fragment key={key}>
                <dt className={styles.title}>Fermentation Temperature</dt>
                <dd>
                  <dt>
                    Temperature {temp.value} {temp.unit}
                  </dt>
                </dd>
              </React.Fragment>
            );
          }
        }

        return (
          <React.Fragment key={key}>
            <dt>{key}</dt>
            <dd>
              <dl>{generateMethodList(value)}</dl>
            </dd>
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <h2>Ingredients:</h2>
      <dl className={styles.list}>
        {generateIngredientsList(data.ingredients)}
      </dl>

      <h2>Method:</h2>
      <dl>{generateMethodList(data.method)}</dl>
    </div>
  );
}

export default DescriptionLists;
