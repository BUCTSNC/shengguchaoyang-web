import { compact } from "lodash";

export type Telephone = Array<string | number>;
export type Department = {
    departmentName: string;
    telephone?: Telephone;
    subDepartments?: Department[];
};

export function searchTel(
    keyword: string,
    department: Department
): Department[] {
    return compact([
        department.departmentName.match(new RegExp(keyword, "i")) && department,
        ...(department.subDepartments
            ?.map((dep) => searchTel(keyword, dep))
            .flat() ?? []),
    ]);
}

export default searchTel;
