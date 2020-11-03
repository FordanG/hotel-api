import express from "express";
import { bookingRoutes } from "../../module/booking/booking.routes";
import { crudRoutes } from "../../module/crud/crud.routes";
import { roomRoutes } from "../../module/room/room.routes";

const apiRoutes = express.Router();

apiRoutes.get("/", function(req, res, next) {
  res.json({ message: "from index api" });
});

apiRoutes.use("/auth", crudRoutes);
apiRoutes.use("/booking", bookingRoutes);
apiRoutes.use("/room", roomRoutes);

export default apiRoutes;
