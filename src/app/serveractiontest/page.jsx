import { addPost, deletePost } from '@/lib/action';

const Serveraction = () => {
  return (
    <div>
        <form action={addPost} >
            <input type="text" placeholder="title" name="title"/>
            <input type="text" placeholder="desc" name="desc"/>
            <input type="text" placeholder="slug" name="slug"/>
            <input type="text" placeholder="userId" name="userId"/>
            <input type="text" placeholder="Image url" name="img"/>
            <button>create</button>
        </form>
        <form action={deletePost} >
            <input type="text" placeholder="postId" name="postId"/>  
            <button>delete</button>
        </form>
    </div>
  )
}

export default Serveraction;