import BasicTable from "./components/BasicTable";
import ColumnGroups from "./components/ColumnGroups";
import ShadstyleTable from "./components/ShadstyleTable";
import SubComponents from "./components/SubComponents";

export default function Home() {
	return (
		<section className="flex gap-3">
			{/* <div>
				<BasicTable />
				<ColumnGroups />
				<SubComponents />
			</div> */}
			<div className="">
				<ShadstyleTable />
			</div>
		</section>
	);
}
