import Button from '../Button/Button';
import './CardWidget.css';
const CardWidget = ({
	children,
	className = '',
	header = '',
	onOpen = null,
	accent = 'white',
}) => {
	if (children == null) return null;
	return (
		<div
			className={`card ${className} grid grid-rows-10 rounded-sm p-2 text-wrap md:rounded-lg lg:rounded-xl`}
		>
			<div className="card-body row-span-9 grid gap-1 border-inherit">
				<h1 className="card-header h-fit border-b border-inherit font-extrabold">
					{header}
				</h1>
				{children}
			</div>
			<div className="card-footer mr-4 flex h-fit items-center justify-end place-self-end">
				<Button
					className={`card-button text-lg/snug md:text-xl/snug lg:text-2xl/8 ${accent}`}
					onClick={onOpen}
				>
					⤍
				</Button>
			</div>
		</div>
	);
};

export default CardWidget;
