import { ValidationError, useForm } from "@formspree/react";
import { SiteText } from "../sdk/CommonComponents";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xkndnwwp");

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <SiteText value="Email:" />
      </label>
      <input
        placeholder="something@somewhere.[com|etc]"
        id="email"
        type="email"
        name="email"
        style={{ width: "25%" }}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div>
        <label htmlFor="message">
          <SiteText value="Message:" />
        </label>
        <textarea
          id="message"
          name="message"
          style={{ width: "50%", height: "5rem" }}
        />
      </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {state.succeeded && <SiteText value="Received." />}
      {state.submitting && <SiteText value="Submitting..." />}
      {!state.succeeded && !state.submitting && (
        <button type="submit" disabled={state.submitting}>
          <SiteText value="Send" />
        </button>
      )}
    </form>
  );
};
