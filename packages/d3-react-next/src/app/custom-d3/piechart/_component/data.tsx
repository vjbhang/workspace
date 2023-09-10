interface GraphMockData {
  name: string;
  percentage: number;
  value: number;
}

export const careerTimeMockData: GraphMockData[] = [
  {
    name: "0~5년차",
    percentage: 10,
    value: 50,
  },
  {
    name: "6~10년차",
    percentage: 10,
    value: 20,
  },
  {
    name: "11~15년차",
    percentage: 10,
    value: 10,
  },
  {
    name: "16~20년차",
    percentage: 10,
    value: 7,
  },
  {
    name: "20년차 이상",
    percentage: 10,
    value: 3,
  },
];

export const ageGroupMockData: GraphMockData[] = [
  {
    name: "10대",
    percentage: 21,
    value: 21,
  },
  {
    name: "20대",
    percentage: 42,
    value: 42,
  },
  {
    name: "30대",
    percentage: 27,
    value: 27,
  },
  {
    name: "40대",
    percentage: 6,
    value: 6,
  },
  {
    name: "50대",
    percentage: 2,
    value: 2,
  },
  {
    name: "60대 이상",
    percentage: 2,
    value: 2,
  },
];

export const turtleNeckStatusMockData: GraphMockData[] = [
  {
    name: "정상",
    percentage: 80,
    value: 800,
  },
  {
    name: "경미",
    percentage: 10,
    value: 100,
  },
  {
    name: "중증도",
    percentage: 8,
    value: 80,
  },
  {
    name: "심각",
    percentage: 2,
    value: 20,
  },
];
export const genderGroupMockData: GraphMockData[] = [
  {
    name: "여성",
    percentage: 10,
    value: 55,
  },
  {
    name: "남성",
    percentage: 10,
    value: 45,
  },
];
