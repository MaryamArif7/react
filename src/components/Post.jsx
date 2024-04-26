
const Post = ({post}) => {
  return (
    <>
<div className="card post-card"  style={{ width: "18rem" }}>

  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p>{post.body}</p>
    {post.tags.map((tag)=>(    <span className="badge text-bg-primary tag">{tag}</span>))}

 

  </div>
</div>

    </>
  )
}

export default Post