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
