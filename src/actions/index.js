/*
name action
declare
funct
export
import
case
import to comp
pass to handl
*/

export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (feature) => {
  return { type: ADD_FEATURE, payload: feature };
};

export const REM_FEATURE = "REM_FEATURE";
export const remFeature = (feature) => {
  return { type: REM_FEATURE, payload: feature };
};
