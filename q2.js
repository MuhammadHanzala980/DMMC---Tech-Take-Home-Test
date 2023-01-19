router.get('/total_budget', (req, res) => {
    connection.query(
        `
      SELECT 
        e.id as employee_id, 
        SUM(p.budget) as total_budget
      FROM 
        employees e
        JOIN employees_projects ep ON e.id = ep.employee_id
        JOIN projects p ON ep.project_id = p.id
      GROUP BY
        e.id
      ORDER BY 
        total_budget DESC
      `,
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});
