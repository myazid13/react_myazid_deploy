import { Button, Form, Input, Table, Typography, Popconfirm, Space } from "antd";
import React, { useEffect, useState } from "react";
import { INITIAL_TABLE_DATA } from "./constants";
import Gap from "../../components/gap/gap";
import Error from "../../components/error/error";
import avatar from "../../assets/avatar.webp";
import { useDeleteBiodata, usePostBiodata, useGetBiodata, useUpdateBiodata } from "./hooks/useBiodata";

const FormCrud = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  const [form] = Form.useForm();
  const [isLoadingBiodata, biodata, getBiodata] = useGetBiodata();
  const [isLoadingCreateBiodata, createBiodata] = usePostBiodata();
  const [isLoadingDeleteBiodata, deleteBiodata] = useDeleteBiodata();
  const [isLoadingUpdateBiodata, updateBiodata] = useUpdateBiodata();

  const [isEdit, setIsEdit] = useState(false);
  const [rowData, setRowData] = useState();

  const TABLE_COLUMNS = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: () => <img src={avatar} alt="avatar" style={{ width: "55px" }} />,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Popconfirm title="Sure to delete?" arrow={false} onConfirm={() => onDelete(record.id)}>
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const handleEdit = (data) => {
    setRowData(data);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    form.resetFields();
  };

  const onAdd = (values) => {
    createBiodata(values, () => {
      getBiodata();
      form.resetFields();
    });
  };

  const onDelete = (row_id) => {
    deleteBiodata(row_id, () => {
      getBiodata();
    });
  };

  const onEdit = (values) => {
    const id = rowData?.id;
    updateBiodata(id, values, () => {
      getBiodata();
      handleCancel();
    });
  };
  useEffect(() => {
    getBiodata();
  }, []);

  return (
    <>
      <Title>Form Biodata Mahasiswa</Title>

      {/* Form */}
      <Form
        form={form}
        name="bio"
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 15,
        }}
        style={{
          width: 800,
        }}
        fields={[
          {
            name: ["firstName"],
            value: isEdit ? rowData?.firstName : null,
          },
          {
            name: ["lastName"],
            value: isEdit ? rowData?.lastName : null,
          },
          {
            name: ["nim"],
            value: isEdit ? rowData?.nim : null,
          },
          {
            name: ["address"],
            value: isEdit ? rowData?.address : null,
          },
        ]}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="Input your first name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input placeholder="Input your last name" />
        </Form.Item>

        <Form.Item
          label="NIM"
          name="nim"
          rules={[
            {
              required: true,
              message: <Error message={"Please input your nim!"} />,
            },
          ]}
        >
          <Input placeholder="Input your nim" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <TextArea placeholder="Input your address" rows={4} />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoadingUpdateBiodata}>
              Save
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Space>
        ) : (
          <Form.Item shouldUpdate className="submit">
            {() => (
              <Button type="primary" htmlType="submit" loading={isLoadingCreateBiodata} disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length > 0}>
                Submit
              </Button>
            )}
          </Form.Item>
        )}
      </Form>

      <Gap height={30} />

      {/* Table */}
      <Table rowKey="id" columns={TABLE_COLUMNS} dataSource={biodata} loading={isLoadingBiodata || isLoadingDeleteBiodata} />
    </>
  );
};

export default FormCrud;
