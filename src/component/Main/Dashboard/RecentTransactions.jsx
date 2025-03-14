import { useState } from "react";
import { Modal, Space, Table, ConfigProvider } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import moment from "moment";

const RecentTransactions = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const data = [
    {
      "_id": "1",
      "transactionId": "TXN001",
      "userId": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "amount": 100,
      "createdAt": "2025-03-12T10:00:00Z"
    },
    {
      "_id": "2",
      "transactionId": "TXN002",
      "userId": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "amount": 250,
      "createdAt": "2025-03-11T14:00:00Z"
    },
    // ...more data
  ];

  const dataSource = data?.slice(0, 10).map((transaction, index) => ({
    key: transaction._id,
    si: index + 1,
    transactionId: transaction.transactionId,
    userName: transaction.userId?.name || "N/A",
    email: transaction.userId?.email || "N/A",
    amount: transaction.amount,
    date: transaction.createdAt,
  })) || [];

  const showModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTransaction(null);
  };

  const columns = [
    {
      title: "#SL",
      dataIndex: "si",
      key: "si",
      align: "center",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      render: (text) => (
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/40" // Replace with real avatar URL
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Time & Date",
      dataIndex: "date",
      key: "date",
      render: (text) =>
        text
          ? `${moment(text).format("D MMM YY")}, ${moment(text).format(
              "h:mmA"
            )}`
          : "N/A",
    },
    {
      title: "Actions",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <EyeOutlined
            onClick={() => showModal(record)}
            style={{ fontSize: "18px", cursor: "pointer" }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full py-4">
      <h2 className="font-semibold text-lg mb-4">Recent user list</h2>
      <ConfigProvider
        theme={{
          token: {
            // colorBgContainer: "#FFFFFF",
          },
          components: {
            Table: {
              headerBg: "#2C2480", // Dark blue header
              headerColor: "#FFFFFF",
              border: "none",
              headerBorderRadius: 8,
              rowHoverBg: "#F1F5F9",
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          scroll={{ x: 800 }}
          bordered={false}
          className="custom-table"
          rowClassName="hover:shadow-lg"
        />
      </ConfigProvider>

      {/* Modal */}
      <Modal
        open={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
        centered
        width={600}
      >
        <div className="text-black p-2">
          <h1 className="text-center text-xl font-semibold my-2 text-gray-500">
            Transaction Details
          </h1>
          <div className="p-5 space-y-4">
            <div className="flex justify-between py-2 border-b border-gray-300">
              <p>Transaction ID:</p>
              <p>{selectedTransaction?.transactionId || "N/A"}</p>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <p>Date:</p>
              <p>
                {selectedTransaction?.date
                  ? moment(selectedTransaction.date).format("DD MMM YYYY, h:mm A")
                  : "N/A"}
              </p>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <p>User Name:</p>
              <p>{selectedTransaction?.userName || "N/A"}</p>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <p>Email:</p>
              <p>{selectedTransaction?.email || "N/A"}</p>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <p>Transaction Amount:</p>
              <p>{selectedTransaction?.amount || "N/A"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RecentTransactions;
