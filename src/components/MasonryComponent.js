import React from "react";
import { CellMeasurer, Masonry } from "react-virtualized";
import {
  columnWidth,
  defaultHeight,
  cache,
  cellPositioner,
  keyMapper,
} from "../MasonryInit";

const MasonryComponent = ({ itemsWithSizes, setRef }) => {
    
    const cellRenderer = ({ index, key, parent, style }) => {
      const { item, size } = itemsWithSizes[index];
      const height = columnWidth * (size.height / size.width) || defaultHeight;
  
      return (
        <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
          <div style={style}>
            <div>{item.title}</div>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  height: height,
                  width: columnWidth,
                  display: "block"
                }}
              />
            )}
          </div>
        </CellMeasurer>
      );
    };
  
    return (
      <Masonry
        cellCount={itemsWithSizes.length}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={cellRenderer}
        height={600}
        width={800}
        keyMapper={keyMapper}
        ref={setRef}
      />
    );
  };

export default MasonryComponent;
