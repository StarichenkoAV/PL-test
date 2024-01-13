import React, { FC } from "react";
import cn from "classnames";

import css from "./SortButton.module.scss";
import IconsSvg from "../../../assets/icons.svg";

export interface ISortButtonProp {
	// isSorting: boolean;
	isDesc: boolean;
	onClick: () => void;
}

export const SortButton: FC<ISortButtonProp> = ({ isDesc, onClick }: ISortButtonProp) => {
	const componentProps = {
		className: cn(css.component, { [css.isDesc]: isDesc }),
		onClick,
		title: `Сортировать по ${isDesc ? `возрастанию` : `убыванию`}`,
	};

	const svgProps = {
		fill: `black`,
		stroke: `transparent`,
		width: `14px`,
		height: `13px`,
	};

	return (
		<div {...componentProps}>
			<svg {...svgProps}>
				<use xlinkHref={`${IconsSvg}#arrow-down`} />
			</svg>
		</div>
	);
};
