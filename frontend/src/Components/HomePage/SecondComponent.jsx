import classes from "./SecondComponent.module.css";
import SecondComponentCard from "./SecondComponentCard";
import { useState } from "react";
import img from "../../assets/doctorSecondComponent.avif";
export default function SecondComponent() {
  const [component, changeComponent] = useState(true);
  let data;
  if (component) {
    data = (
      <div className={classes.innerContainer}>
        <SecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
        <SecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
        <SecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
        <SecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
        <SecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
        <SecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
      </div>
    );
  } else {
    data = (
      <div className={classes.secondContainer}>
        <div className={classes.left}>
          <SecondComponentCard
            heading={"welcome"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
            }
          />
          <SecondComponentCard
            heading={"welcome"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
            }
          />
          <SecondComponentCard
            heading={"welcome"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
            }
          />
          <SecondComponentCard
            heading={"welcome"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
            }
          />
        </div>
        <img src={img} className={classes.right}></img>
      </div>
    );
  }
  console.log(component);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.btnnav}>
          <button
            className={classes.btn}
            id={component && classes.active}
            onClick={() => changeComponent(true)}
          >
            Our Services
          </button>
          <button
            className={classes.btn}
            id={!component && classes.active}
            onClick={() => changeComponent(false)}
          >
            Why Choose us
          </button>
        </div>
        {data}
      </div>
    </>
  );
}
