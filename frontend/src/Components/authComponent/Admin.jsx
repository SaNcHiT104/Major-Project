import classes from './Admin.module.css'
export default function Admin() {
<<<<<<< HEAD
  let content = (
    <>
      <label htmlFor="username" className={classes.form_heading}>
        Username:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        required
        className={classes.label}
      ></input>
      <label htmlFor="password" className={classes.form_heading}>
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
      <form className={classes.login_form}>{content}</form>
    </>
  );
}
=======
    let content = (<>
        <label for="username" className={classes.form_heading}>Username:</label>
        <input type="text" id="username" name="username" required className={classes.label}></input>
        <label for="password" className={classes.form_heading}>Password:</label>
        <input type="password" id="password" name="password" required className={classes.label}></input>
        <button className={classes.login} type="submit">Login</button>
    </>)
    return (
        <>
            <form class={classes.login_form}>
                {content}
            </form>

        </>
    )
}
>>>>>>> c48205a858c305a1ae666a8e1ff984bc7fa1e57f
