import { Router } from "express";
import { CheckoutDayController } from "./controllers/CheckoutDayController";

const router = Router();

const checkoutDayController = new CheckoutDayController();

router.post("/api/checkoutDay", checkoutDayController.create);

router.get("/api/checkoutDay/findOneByDay", checkoutDayController.findOneByDay);

router.get("/api/checkoutDay/findOneByID/:id", checkoutDayController.findOneByID);

router.get("/api/checkoutDay/listAll", checkoutDayController.findAllOfTheMonth);

router.put("/api/checkoutDay/:id", checkoutDayController.update);

router.delete("/api/checkoutDay/:id", checkoutDayController.delete);


export { router };
