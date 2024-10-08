import React from "react";
import { useParams, useLocation } from "react-router-dom";
import NavBar from "../Hero/NavBar/NavBar";
import styles from "./BlogPostPage.module.css"; 
import Footer from "../Footer/Footer";

const BlogPostPage = () => {
    const { id } = useParams(); // Get the id from the URL
    const location = useLocation(); // Get the location object to access state
    const { blogPost } = location.state || {}; // Extract blogPost from state
  
    if (!blogPost) return <div className={styles.notFound}>Blog post not found!</div>;
  
    return (
    <>    
    <NavBar/>
    <div className={styles.Head}>
  <div className={styles.blogPostContainer}>
    <h1 className={styles.blogTitle}>{blogPost.title}</h1>
    <img src={blogPost.imgSrc} alt={blogPost.title} className={styles.blogImage} />
    <p className={styles.blogDescription}>{blogPost.fullDescription}</p>
  </div>

  <div className={styles.extraImages}>
    {blogPost.extraImages.map((image, index) => (
      <img key={index} src={image} alt={`Extra image ${index + 1}`} className={styles.extraImage} />
    ))}
  </div>
</div>

    <Footer/>
 </>
    );
  };
  
export default BlogPostPage;



