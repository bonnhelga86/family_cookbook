import Sign from "../../Sections/Sign/Sign";

function SignIn() {
  function handleSubmit(event) {
    event.prevenrDefault();
    console.log('Submit');

  }
  return (
    <section className="sign" aria-label="Секция авторизации">
      <Sign handleSubmit={handleSubmit} />
    </section>
  );
}

export default SignIn;
