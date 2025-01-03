import type { ColumnConfig } from "./Table";
import Table from "./Table";

export default {
	component: Table,
};

interface RowData {
  id: number;
  name: string;
  age: number;
  address: string;
}

const dataSource: RowData[] = [
	{ id: 1, name: "John Doe", age: 28, address: "123 Main St" },
	{ id: 2, name: "Jane Smith", age: 34, address: "456 Elm St" },
	{ id: 3, name: "Alice Johnson", age: 45, address: "789 Oak St" },
];

const columns: ColumnConfig<RowData>[] = [
	{
		title: "ID",
		props: "id",
		width: "50px",
	},
	{
		title: "Name",
		props: "name",
		width: "150px",
	},
	{
		title: "Age",
		props: "age",
		width: "80px",
	},
	{
		title: "Address",
		props: "address",
	},
];

export const BasicTable = () => <Table columns={columns} dataSource={dataSource} />;

export const TableWithCustomRender = () => {
	const customColumns: ColumnConfig<RowData>[] = [
		...columns,
		{
			title: "Actions",
			renderCell: (row) => (
				<button
					className="text-blue-500 hover:underline"
					onClick={() => alert(`Edit row: ${row.id}`)}
				>
            Edit
				</button>
			),
			width: "100px",
		},
	];

	return <Table columns={customColumns} dataSource={dataSource} />;
};

export const StripedTable = () => (
	<Table
		strip
		columns={columns}
		dataSource={dataSource}
	/>
);
