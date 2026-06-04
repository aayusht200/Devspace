const TableComponent = ({ data, columns, renderActions, className }) => {
      return (
            <table className={`${className}`}>
                  <thead>
                        <tr>
                              {columns.map((col) => (
                                    <th key={col.accessor}>{col.header}</th>
                              ))}

                              {renderActions && <th>Actions</th>}
                        </tr>
                  </thead>

                  <tbody>
                        {Object.entries(data).map(([id, task]) => (
                              <tr key={id}>
                                    {columns.map((col) => {
                                          return (
                                                <td
                                                      key={`${id}-${col.accessor}`}
                                                >
                                                      {col.render
                                                            ? col.render(
                                                                    task[
                                                                          col
                                                                                .accessor
                                                                    ],
                                                                    task,
                                                              )
                                                            : task[
                                                                    col.accessor
                                                              ]}
                                                </td>
                                          );
                                    })}

                                    {renderActions && (
                                          <td>{renderActions(task, id)}</td>
                                    )}
                              </tr>
                        ))}
                  </tbody>
            </table>
      );
};

export default TableComponent;
