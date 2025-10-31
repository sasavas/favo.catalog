import React, { useMemo } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const seasons = [
  { key: "spring-autumn", label: "Spring/Autumn" },
  { key: "winter", label: "Winter" },
  { key: "summer", label: "Summer" },
];

const genders = [
  { key: "boys", label: "Boys" },
  { key: "girls", label: "Girls" },
  { key: "unisex", label: "Unisex" },
];

const ageGroups = [
  { key: "baby", label: "Baby" },
  { key: "toddler", label: "Toddler" },
  { key: "kid", label: "Kid" },
];

function normalizeArrayParam(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  return String(v).split(",").filter(Boolean);
}

export default function FiltersSidebar() {
  const router = useRouter();
  const { query, pathname } = router;

  const sel = useMemo(
    () => ({
      season: normalizeArrayParam(query.season),
      gender: normalizeArrayParam(query.gender),
      ageGroup: normalizeArrayParam(query.ageGroup),
    }),
    [query]
  );

  const toggle = (name, value) => {
    const values = new Set(sel[name]);
    if (values.has(value)) values.delete(value);
    else values.add(value);
    const next = {
      ...query,
      [name]: Array.from(values).join(",") || undefined,
      pageNumber: undefined, // reset pagination
    };
    router.push({ pathname, query: next }, undefined, { shallow: true });
  };

  return (
    <Box>
      <Group>
        {seasons.map((s) => (
          <label key={s.key}>
            <input
              type="checkbox"
              checked={sel.season.includes(s.key)}
              onChange={() => toggle("season", s.key)}
            />
            <span>{s.label}</span>
          </label>
        ))}
      </Group>
      <Divider />
      <Group>
        {genders.map((g) => (
          <label key={g.key}>
            <input
              type="checkbox"
              checked={sel.gender.includes(g.key)}
              onChange={() => toggle("gender", g.key)}
            />
            <span>{g.label}</span>
          </label>
        ))}
      </Group>
      <Divider />
      <Group>
        {ageGroups.map((a) => (
          <label key={a.key}>
            <input
              type="checkbox"
              checked={sel.ageGroup.includes(a.key)}
              onChange={() => toggle("ageGroup", a.key)}
            />
            <span>{a.label}</span>
          </label>
        ))}
      </Group>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.95rem;
    cursor: pointer;

    input {
      accent-color: #111;
    }
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #ddd;
  margin: 0.6rem 0;
`;

