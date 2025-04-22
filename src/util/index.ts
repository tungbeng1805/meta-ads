import { IMenuItem } from "@/pages/Campaign/components/ViewChart";

export const getParamsId = () => {
  const { search } = window.location;

  const params = new URLSearchParams(search);

  const obj: any = {};

  for (const [key, value] of params.entries()) {
    obj[key] = isNaN(value as any) ? value : Number(value);
  }
  return obj;
};

export const STATUS = {
  ACTIVE: "Active",
  IN_ACTIVE: "InActive",
};

export function getIdsAtLevel(
  data: IMenuItem[],
  targetLevel: any,
  currentLevel = 1
) {
  let result: any = [];

  data.forEach((item: IMenuItem) => {
    if (currentLevel === targetLevel && item.id !== undefined) {
      result.push(item.id);
    }

    if (item.groups && Array.isArray(item.groups)) {
      result = result.concat(
        getIdsAtLevel(item.groups, targetLevel, currentLevel + 1)
      );
    }
  });

  return result;
}
