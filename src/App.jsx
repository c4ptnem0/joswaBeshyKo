import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, Form, Input, notification, Space } from "antd";
import "./App.css";

const { TextArea } = Input;

function App() {
  const [inputText, setInputText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const convertTextToBeshify = () => {
    const converted = inputText.replace(/ /g, " 🤸 ");
    setConvertedText(converted);
    copyToClipboard(converted);

    notification.success({
      message: "Bongga!",
      description: "Na-beshify na beshy ko!",
      placement: "topRight",
    });
  };

  const copyToClipboard = async (convertedText) => {
    try {
      await navigator.clipboard.writeText(convertedText);
      console.log("Text copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> BESHY MO KAY KUAN KA</h1>
      <div className="">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Beshy ko kailangan hindi blangko!",
            },
          ]}
          style={{ textAlign: "center" }}
        >
          <Input
            placeholder="Lagay ka dito ng i-beshify mo"
            onChange={(e) => setInputText(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <TextArea value={convertedText}></TextArea>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              onClick={convertTextToBeshify}
            >
              I-beshify mo na!
            </Button>
            <Button
              type="primary"
              onClick={() => copyToClipboard(convertedText)}
            >
              Kopyahin mo be
            </Button>
          </Space>
        </Form.Item>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
