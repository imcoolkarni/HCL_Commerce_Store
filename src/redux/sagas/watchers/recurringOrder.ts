/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *==================================================
 */
//Standard libraries
import { takeLatest } from "redux-saga/effects";
//Redux
import {
  FETCH_RECURRING_ORDER_ACTION,
  CANCEL_RECURRING_ACTION,
} from "../../actions/recurringOrder";
import * as WORKERS from "../workers/recurringOrder";
import { RECURRINGORDER_PLACE_SUCCESS } from "../../action-types/order";

export function* watchSaga() {
  yield takeLatest(
    [FETCH_RECURRING_ORDER_ACTION, RECURRINGORDER_PLACE_SUCCESS],
    WORKERS.fetchRecurringOrders
  );
  yield takeLatest(CANCEL_RECURRING_ACTION, WORKERS.cancelRecurringOrder);
}
