import Sign from "../../Sections/Sign/Sign";

function SignUp() {
  function handleSubmit(event) {
    event.prevenrDefault();
    console.log('Submit');

  }
  return (
    <section className="sign" aria-label="Секция регистрации">
      <Sign handleSubmit={handleSubmit} />
    </section>
  );
}

export default SignUp;
