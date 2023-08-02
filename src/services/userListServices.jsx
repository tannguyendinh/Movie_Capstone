import { https } from "./config";

export const userSer = {
  getAllUserList: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },
};
