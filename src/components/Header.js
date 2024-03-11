import './Header.css'
import styles from './Header.module.css'

function Header(){

  const myStyle = {
    color:"white", 
    backgroundColor:"black", 
    fontFamily:"roboto",
    padding : 40,
  };

  return(
    <>
    {/* <h1 style={{color:"white", backgroundColor:"black", fontFamily:"roboto"}}>CSS Styling is done</h1> */}

    {/* <h1 style={myStyle}>CSS Styling is done</h1> */}
    <h1 className={styles.bigBlue}>CSS Styling is done</h1>
    <p >Add more styling to it</p>

    
    </>
  );

}
export default Header;