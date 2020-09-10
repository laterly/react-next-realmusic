import { PlayCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Avatar } from "antd";
import "../test/test.scss";
const Head = () => {
  return (
    <div className="header-inner">
      ewrew
      <div className="header-left">
        <div
          className="logo"
          style={{ fontSize: "40px", color: "#fff", marginRight: 20 }}
        >
        abs
          <PlayCircleOutlined />
        </div>
        <div></div>
      </div>
      <div className="header-right">
        <Avatar size={40} icon={<UserOutlined />} />
      </div>
      <style jsx>{`
        .header-inner {
          display: flex;
          justify-content: space-between;
          .header-left {
            display: flex;
            color:blue;
            justify-content: flex-start;
          }
        }
      `}</style>
      <style jsx global>{`
       
      `}</style>
    </div>
  );
};
export default Head;
