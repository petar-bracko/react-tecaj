import { useReducer } from "react";
import { useForm } from "../hooks";
import {
  stateFormInitValues,
  useStateHellInitValues,
} from "../data/initial-states";
import type { StateForm, StateFormHook } from "../types";
import {
  Typography,
  Form,
  Input,
  Select,
  Button,
  Space,
  message,
  Divider,
} from "antd";

export const Forms = () => {
  return (
    <>
      <Typography.Title className="text-center">Forms</Typography.Title>
      <FormWithUseState />
      <Divider />
      <FormWithUseReducer />
    </>
  );
};

function FormWithUseState() {
  const {
    state,
    handleInputChange,
    handleSelectChange,
    handleSelectClear,
    resetState,
  }: StateFormHook = useForm(stateFormInitValues);

  function handleSubmit() {
    console.log("form submitted", state);
    resetState();
    message.success("Form submitted successfully!");
  }

  return (
    <>
      <Typography.Title level={3} className="text-center">
        State Form
      </Typography.Title>
      <div className="state-form-wrapper">
        <Form layout="vertical" className="state-form">
          <Form.Item label="Ime" required>
            <Input
              placeholder="Unesite ime"
              name="ime"
              value={state.ime}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Prezime" required>
            <Input
              placeholder="Unesite prezime"
              name="prezime"
              value={state.prezime}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Pozicija" required>
            <Select
              value={state.pozicija}
              allowClear
              onClear={() => handleSelectClear("pozicija")}
              options={[
                { label: "Frontend developer", value: "frontend" },
                { label: "Backend developer", value: "backend" },
                { label: "Tester", value: "test" },
              ]}
              placeholder="Odaberite poziciju"
              onChange={handleSelectChange("pozicija")}
            />
          </Form.Item>
          <Form.Item label="Work" required>
            <Select
              value={state.work}
              options={[
                { label: "Office", value: "office" },
                { label: "Remote", value: "remote" },
              ]}
              placeholder="Odaberite rad"
              onChange={handleSelectChange("work")}
            />
          </Form.Item>
          <div className="text-center">
            <Space>
              <Button type="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button onClick={resetState}>Reset</Button>
            </Space>
          </div>
        </Form>
      </div>
    </>
  );
}

function FormWithUseReducer() {
  const [state, updateState] = useReducer(
    (
      prev: StateForm,
      next:
        | {
            [key: string]: string | null;
          }
        | StateForm
    ): StateForm => {
      const newState: StateForm = { ...prev, ...next };

      if (newState.prezime === "bracko") newState.pozicija = "frontend";

      return newState;
    },
    { ...useStateHellInitValues }
  );

  const handlePromjenuInputa = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => updateState({ [name]: value });

  const handlePromjenuSelecta = (name: string) => (value: string) =>
    updateState({ [name]: value });

  const clearSelect = (prop: string) => updateState({ [prop]: null });

  function resetState() {
    updateState({ ...useStateHellInitValues });
  }

  function handleSubmit() {
    console.log("form submitted", state);
    resetState();
    message.success("Form submitted successfully!");
  }

  return (
    <>
      <Typography.Title level={3} className="text-center">
        Reducer Form
      </Typography.Title>
      <div className="state-form-wrapper">
        <Form layout="vertical" className="state-form">
          <Form.Item label="Ime" required>
            <Input
              placeholder="Unesite ime"
              name="ime"
              value={state.ime}
              onChange={handlePromjenuInputa}
            />
          </Form.Item>
          <Form.Item label="Prezime" required>
            <Input
              placeholder="Unesite prezime"
              name="prezime"
              value={state.prezime}
              onChange={handlePromjenuInputa}
            />
          </Form.Item>
          <Form.Item label="Pozicija" required>
            <Select
              value={state.pozicija}
              allowClear
              onClear={() => clearSelect("pozicija")}
              options={[
                { label: "Frontend developer", value: "frontend" },
                { label: "Backend developer", value: "backend" },
                { label: "Tester", value: "test" },
              ]}
              placeholder="Odaberite poziciju"
              onSelect={handlePromjenuSelecta("pozicija")}
            />
          </Form.Item>
          <Form.Item label="Work" required>
            <Select
              value={state.work}
              options={[
                { label: "Office", value: "office" },
                { label: "Remote", value: "remote" },
              ]}
              placeholder="Odaberite rad"
              onChange={handlePromjenuSelecta("work")}
            />
          </Form.Item>
          <div className="text-center">
            <Space>
              <Button type="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button onClick={resetState}>Reset</Button>
            </Space>
          </div>
        </Form>
      </div>
    </>
  );
}
