import { Payment, columns } from "../payments/columns";
import { DataTable } from "../payments/data-table";

const ShadstyleTable = () => {
	const data: Payment[] = [
		{
			id: "m5gr84ib",
			amount: 202,
			status: "success",
			email: "ben02@example.com",
		},
		{
			id: "m5gr84id",
			amount: 404,
			status: "pending",
			email: "diana04@example.com",
		},
		{
			id: "m5gr84ik",
			amount: 1111,
			status: "success",
			email: "kevin11@example.com",
		},
		{
			id: "m5gr84ia",
			amount: 101,
			status: "pending",
			email: "alice01@example.com",
		},
		{
			id: "m5gr84ic",
			amount: 303,
			status: "failed",
			email: "charlie03@example.com",
		},
		{
			id: "m5gr84il",
			amount: 1212,
			status: "failed",
			email: "laura12@example.com",
		},
		{
			id: "m5gr84im",
			amount: 1313,
			status: "pending",
			email: "michael13@example.com",
		},
		{
			id: "m5gr84in",
			amount: 1414,
			status: "success",
			email: "nina14@example.com",
		},
		{
			id: "m5gr84io",
			amount: 1515,
			status: "failed",
			email: "oliver15@example.com",
		},
		{
			id: "m5gr84iq",
			amount: 1717,
			status: "success",
			email: "quincy17@example.com",
		},
		{
			id: "m5gr84ie",
			amount: 505,
			status: "success",
			email: "ethan05@example.com",
		},
		{
			id: "m5gr84ih",
			amount: 808,
			status: "success",
			email: "hannah08@example.com",
		},
		{
			id: "m5gr84ii",
			amount: 909,
			status: "failed",
			email: "ian09@example.com",
		},
		{
			id: "m5gr84ir",
			amount: 1818,
			status: "failed",
			email: "rachel18@example.com",
		},
		{
			id: "m5gr84is",
			amount: 1919,
			status: "pending",
			email: "steven19@example.com",
		},
		{
			id: "m5gr84if",
			amount: 606,
			status: "failed",
			email: "fiona06@example.com",
		},
		{
			id: "m5gr84ig",
			amount: 707,
			status: "pending",
			email: "george07@example.com",
		},

		{
			id: "m5gr84ij",
			amount: 1010,
			status: "pending",
			email: "julia10@example.com",
		},
		{
			id: "m5gr84it",
			amount: 2020,
			status: "success",
			email: "tina20@example.com",
		},
		{
			id: "m5gr84iu",
			amount: 2121,
			status: "failed",
			email: "ulysses21@example.com",
		},
		{
			id: "m5gr84iv",
			amount: 2222,
			status: "pending",
			email: "victoria22@example.com",
		},
		{
			id: "m5gr84iw",
			amount: 2323,
			status: "success",
			email: "william23@example.com",
		},
		{
			id: "m5gr84ix",
			amount: 2424,
			status: "failed",
			email: "xenia24@example.com",
		},
		{
			id: "m5gr84iy",
			amount: 2525,
			status: "pending",
			email: "yasmine25@example.com",
		},
		{
			id: "m5gr84iz",
			amount: 2626,
			status: "success",
			email: "zachary26@example.com",
		},
		{
			id: "m5gr84ip",
			amount: 1616,
			status: "pending",
			email: "peter16@example.com",
		},
	];

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
		</div>
	);
};

export default ShadstyleTable;
