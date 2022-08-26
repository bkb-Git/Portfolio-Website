// import Navbar from '../../components/Navbar';
// import sns from '../../sns';

export default function Footer() {
  // const snsNav = sns.slice(2);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <small className="copyright">
        Copyright &copy; {year}, Billy Kipkorir Bett
      </small>
      {/* <Navbar buttons={snsNav} page={3} /> */}
    </div>
  );
}
