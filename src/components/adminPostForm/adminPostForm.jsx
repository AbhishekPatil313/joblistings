"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Job Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="company" placeholder="company" />
      <input type="text" name="skills"  placeholder="skills"/>
      <input type="text" name="jobtype" placeholder="jobtype"></input>
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="image-link (Optional)" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
