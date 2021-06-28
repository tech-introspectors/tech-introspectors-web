import Button from '../../../Button/Button';
import InputForm from './InputForm';

const Form = () => {
  const btnTheme = {
    width: "200px",
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    alert("You have clicked me!!");
  };

  return (
    <div className="bg-white w-full p-5 sm:p-11 shadow-lb-xl rounded-3xl">
      <form>
        <InputForm placeholder="Name" name="name" />
        <InputForm placeholder="Email" name="email" />
        <InputForm placeholder="Phone Number" name="phoneNumber" />
        <InputForm placeholder="Subject" name="subject" />

        <textarea
          className="inputForm h-24 mb-11"
          placeholder="Your Message"
          name="message"
        ></textarea>

        <Button type="submit" onClick={onSubmitHandler} theme={btnTheme}>
          Send message
        </Button>
      </form>
    </div>
  );
};

export default Form;
