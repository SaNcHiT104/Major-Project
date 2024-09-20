import classes from "./Admin.module.css";
export default function Admin() {
  let content = (
    <>
      <label for="username" className={classes.form_heading}>
        Username:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        required
        className={classes.label}
      ></input>
      <label for="password" className={classes.form_heading}>
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className={classes.label}
      ></input>
      <button className={classes.login} type="submit">
        Login
      </button>
    </>
  );
  return (
    <>
      <form class={classes.login_form}>{content}</form>
    </>
  );
}
