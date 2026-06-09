import { toCapitalize } from '../../helperFunctions/functions';

const TableComponent = ({ data, columns, renderActions, className }) => {
      return (
            <table className={`${className} text-xxs md:text-sm lg:text-base`}>
                  <thead className="border-inherit">
                        <tr className="border border-inherit">
                              {columns.map((col) => (
                                    <th
                                          key={col.accessor}
                                          className="overflow-auto border border-inherit md:p-1"
                                    >
                                          {col.header}
                                    </th>
                              ))}

                              {renderActions && (
                                    <th className="border border-inherit md:p-1">
                                          Actions
                                    </th>
                              )}
                        </tr>
                  </thead>

                  <tbody className="overflow-auto border-inherit p-1">
                        {Object.entries(data).map(([id, dataPoint]) => (
                              <tr
                                    key={id}
                                    className="overflow-auto border border-inherit p-1 text-center"
                              >
                                    {columns.map((col) => {
                                          return (
                                                <td
                                                      key={`${id}-${col.accessor}`}
                                                      className="border border-inherit p-1 text-center text-wrap"
                                                >
                                                      {col.render
                                                            ? col.render(id)
                                                            : toCapitalize(
                                                                    dataPoint[
                                                                          col
                                                                                .accessor
                                                                    ],
                                                              )}
                                                </td>
                                          );
                                    })}

                                    {renderActions && (
                                          <td className="overflow-auto border border-inherit p-1 text-center">
                                                {renderActions(dataPoint, id)}
                                          </td>
                                    )}
                              </tr>
                        ))}
                  </tbody>
            </table>
      );
};

export default TableComponent;
