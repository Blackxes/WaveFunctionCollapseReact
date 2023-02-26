/**
 * @File File Content
 *
 * @Author Alexander Bassov Sun Jul 31 2022
 * @Email blackxes.dev@gmail.com
 */

import { AppDispatch, AppState } from "./types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
