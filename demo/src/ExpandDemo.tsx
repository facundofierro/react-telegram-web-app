import { Button, Form, Typography } from 'antd';
import { unsafe_useExpand } from '@vkruglikov/react-telegram-web-app';

const ExpandDemo = () => {
  const [isExpanded, expand] = unsafe_useExpand();

  return (
    <>
      <Typography.Title level={3}>unsafe_useExpand</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ExpandDemo"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item name="isExpanded">
          <Typography.Text>isExpanded: {`${isExpanded}`}</Typography.Text>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" onClick={expand}>
            {`isExpanded: ${isExpanded}, call expand()`}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ExpandDemo;