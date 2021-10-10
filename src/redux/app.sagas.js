import { all, call, put, takeLatest } from "redux-saga/effects";
import { addTodoSaga, deleteTodoSaga, updateTodoSaga } from "./app.action";

// ========================
export function* onAddTodoSaga({ payload }) {
  yield put(addTodoSaga(payload));
}

// ========================
export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id));
}
// ========================
export function* onUpdateTodoSaga({ payload }) {
  yield put(updateTodoSaga(payload));
}

// ========================
export function* onDelete() {
  yield takeLatest("DELETE_TODO", onDeleteTodoSaga);
}

// ========================
export function* onAdd() {
  yield takeLatest("ADD_TODO", onAddTodoSaga);
}
// ========================
export function* onUpdate() {
  yield takeLatest("UPDATE", onUpdateTodoSaga);
}
// ========================
export function* todos() {
  yield all([call(onDelete), call(onAdd), call(onUpdate)]);
}
