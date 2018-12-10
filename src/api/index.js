/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax';

const BASE='/api';

export const reqTopicList =()=>ajax(`/topicList`);
export const reqFocusList =()=>ajax(`/focusList`);
export const reqCateList =()=>ajax(`/cateList`);
export const reqTagList =()=>ajax(`/tagList`);
export const reqPolicyDescList =()=>ajax(`/policyDescList`);
export const reqCategory =()=>ajax(`/category`);