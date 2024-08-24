import React from "react";
import bannerImg from "./img/Снимок экрана 2024-08-21 в 13.04.07.png";

export default function Feedback() {
  return (
    <section>
      <h1 className="pt-6 uppercase pb-4 font-bold">
        Collaboration / questions / answers
      </h1>
      <div className="md:grid grid-cols-2">
        <div className="relative">
          <img
            src={bannerImg}
            alt=""
            className="w-full"
            style={{ opacity: 0.3 }}
          />
          <div className="absolute bottom-[15%] md:top-[15%] px-1 md:text-right text-left left-0 md:right-0 text-lg">
            <p>if you have any questions you should</p>
            <p className="text-red-800 pb-2 text-[40px] uppercase font-semibold">
              fill this
            </p>
            <p className="text-red-800 text-[40px] uppercase font-semibold">
              contact form
            </p>
          </div>
        </div>
        <div className="relative">
          <form
            className="w-auto mx-auto text-center md:absolute bottom-0 "
            style={styles.form}
          >
            <input type="text" placeholder="Name" style={styles.input} />
            <input type="email" placeholder="E-mail" style={styles.input} />
            <textarea
              placeholder="Your message..."
              style={styles.textarea}
            ></textarea>
            <button type="submit" className="w-1/2" style={styles.button}>
              SEND
            </button>
          </form>
        </div>
      </div>
      <div className="text-xs text-left py-1 px-3">
        <p className="py-2">
          Smoking is a widely recognized public health issue that has
          significant impacts on both individuals and society as a whole.
          Despite the well-documented risks, millions of people worldwide
          continue to smoke. Smoking is the leading cause of preventable
          diseases, including heart disease, lung cancer, and respiratory
          disorders. The addictive nature of nicotine makes quitting
          challenging, often requiring multiple attempts. Public health
          campaigns and smoking cessation programs aim to reduce smoking rates,
          emphasizing the health benefits of quitting and the dangers of
          secondhand smoke. However, smoking remains a deeply ingrained habit
          for many, influenced by factors such as stress, social pressures, and
          targeted marketing by tobacco companies.
        </p>
        <p className="py-2">
          Smoking is a widely recognized public health issue that has
          significant impacts on both individuals and society as a whole.
          Despite the well-documented risks, millions of people worldwide
          continue to smoke. Smoking is the leading cause of preventable
          diseases, including heart disease, lung cancer, and respiratory
          disorders. The addictive nature of nicotine makes quitting
          challenging, often requiring multiple attempts. Public health
          campaigns and smoking cessation programs aim to reduce smoking rates,
          emphasizing the health benefits of quitting and the dangers of
          secondhand smoke. However, smoking remains a deeply ingrained habit
          for many, influenced by factors such as stress, social pressures, and
          targeted marketing by tobacco companies.
        </p>
      </div>
    </section>
  );
}

const styles = {
  form: {
    display: "flex" as const,
    flexDirection: "column" as const,
    width: "100%",
    margin: "0 auto",
    padding: " 10px 20% 0 20px",
    boxSizing: "border-box" as const,
  },
  input: {
    padding: "10px",
    margin: "0 0 10px",
    border: "1px solid black",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  textarea: {
    padding: "10px",
    margin: "0 0 10px",
    border: "1px solid black",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "5px",
  },
};
