import { Form, Typography, Button, Space, Row } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FamilyMembersDetails from "./familyMemberDetails/FamilyMembersDetails.jsx";
export default function FamilyDetails({form}) {
  return (
    <>
      <Form.List name="familyDetails">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <div key={field.key}>
                {index === 0 && (
                  <Row>
                    <Typography.Title level={4}>
                      Family Details
                    </Typography.Title>
                  </Row>
                )}
                <Row>
                  <FamilyMembersDetails field={field} form={form} />{" "}
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Row>
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Family Member
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}
