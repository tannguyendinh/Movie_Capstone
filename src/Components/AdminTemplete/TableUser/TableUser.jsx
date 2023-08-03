import React from "react";
import { Space, Table, Tag } from "antd";
import "./tableUser.scss";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Họ và tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDT",
    key: "soDT",
  },
  {
    title: "Chức vụ",
    key: "maLoaiNguoiDung",
    dataIndex: "maLoaiNguoiDung",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <div className="flex justify-between">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    id: "1",
    hoTen: "Nguyễn Trung Nguyên",
    email: "nguyen@gmail.com",
    soDT: "0386992371",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
];

const TableUser = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default TableUser;
