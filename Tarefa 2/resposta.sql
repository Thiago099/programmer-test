WITH best_salaries AS 
(
	SELECT	 	id_departament, 
				MAX(person.salary) salary
	FROM 		person
	GROUP BY  	id_departament
)
SELECT 		departament.name departament,
            GROUP_CONCAT(person.name ORDER BY person.name ASC SEPARATOR ', ') person,
            person.salary
FROM 		person 
INNER JOIN 	best_salaries 
ON 			best_salaries.salary = person.salary 
AND 		best_salaries.id_departament = person.id_departament
INNER JOIN 	departament 
ON 			departament.id = person.id_departament
GROUP BY 	departament.id
ORDER BY 	departament.name