import { toCapitalize } from '../../helperFunctions/functions';

const TableComponent = ({ data, columns, renderActions, className }) => {
      return (
            <table className={`${className} `}>
                  <thead className="border-inherit">
                        <tr className="border border-inherit">
                              {columns.map((col) => (
                                    <th
                                          key={col.accessor}
                                          className="h-fit overflow-auto border border-inherit p-1 md:h-5 lg:h-10"
                                    >
                                          {col.header}
                                    </th>
                              ))}

                              {renderActions && (
                                    <th className="h-fit overflow-auto border border-inherit p-1 md:h-5 lg:h-10">
                                          Actions
                                    </th>
                              )}
                        </tr>
                  </thead>

                  <tbody className="h-fit overflow-auto border-inherit p-1 md:h-5 lg:h-10">
                        {Object.entries(data).map(([id, task]) => (
                              <tr
                                    key={id}
                                    className="h-fit overflow-auto border border-inherit p-1 text-center md:h-5 lg:h-10"
                              >
                                    {columns.map((col) => {
                                          return (
                                                <td
                                                      key={`${id}-${col.accessor}`}
                                                      className="h-fit overflow-auto border border-inherit p-1 text-center md:h-5 lg:h-10"
                                                >
                                                      {col.render
                                                            ? col.render(
                                                                    toCapitalize(
                                                                          task[
                                                                                col
                                                                                      .accessor
                                                                          ],
                                                                          task,
                                                                    ),
                                                              )
                                                            : toCapitalize(
                                                                    task[
                                                                          col
                                                                                .accessor
                                                                    ],
                                                              )}
                                                </td>
                                          );
                                    })}

                                    {renderActions && (
                                          <td className="h-fit overflow-auto border border-inherit p-1 text-center md:h-5 lg:h-10">
                                                {renderActions(task, id)}
                                          </td>
                                    )}
                              </tr>
                        ))}
                  </tbody>
            </table>
      );
};

export default TableComponent;
