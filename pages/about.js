import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className="container">
      <h2 className={styles.highlight}>About page</h2>
      <div className="content">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-success">Success</button>
      </div>
    </div>
  );
};

export default About;
