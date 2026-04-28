import { useState } from "react";

const views = [
  { id: "logical", label: "Vista Lógica", icon: "⬡", short: "Componentes" },
  { id: "process", label: "Vista de Procesos", icon: "⟳", short: "Flujo de datos" },
  { id: "dev", label: "Vista de Desarrollo", icon: "⌥", short: "Stack técnico" },
  { id: "physical", label: "Vista Física", icon: "◈", short: "Despliegue" },
  { id: "scenarios", label: "Escenarios (+1)", icon: "◉", short: "Casos de uso" },
];

const colors = {
  ocean: "#0B3D6B",
  wave: "#1565C0",
  sky: "#1E88E5",
  foam: "#42A5F5",
  sand: "#F5F0E8",
  coral: "#E65100",
  kelp: "#2E7D32",
  gold: "#F9A825",
  bg: "#06192E",
  card: "#0D2B4A",
  border: "#1A4A7A",
};

const style = {
  wrap: {
    fontFamily: "'Trebuchet MS', 'Lucida Grande', sans-serif",
    background: `linear-gradient(135deg, ${colors.bg} 0%, #071E3D 50%, #0A2744 100%)`,
    minHeight: "100vh",
    color: "#E8F4FD",
    padding: "0",
  },
  header: {
    borderBottom: `2px solid ${colors.border}`,
    padding: "28px 40px 20px",
    background: "rgba(11,61,107,0.4)",
    backdropFilter: "blur(10px)",
  },
  titleRow: { display: "flex", alignItems: "baseline", gap: 16, marginBottom: 4 },
  brand: { fontSize: 13, letterSpacing: 4, color: colors.foam, textTransform: "uppercase", fontWeight: 700 },
  title: { fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: -0.5 },
  subtitle: { fontSize: 13, color: "#7BB3D4", letterSpacing: 1 },
  tabs: {
    display: "flex", gap: 6, padding: "16px 40px", overflowX: "auto",
    borderBottom: `1px solid ${colors.border}`,
    background: "rgba(6,25,46,0.6)",
  },
  tab: (active) => ({
    padding: "10px 18px", borderRadius: 8, cursor: "pointer", border: "none",
    fontSize: 12, fontWeight: active ? 700 : 500, letterSpacing: 0.5,
    background: active ? colors.wave : "rgba(26,74,122,0.4)",
    color: active ? "#fff" : "#7BB3D4",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
    boxShadow: active ? `0 0 20px rgba(21,101,192,0.5)` : "none",
    display: "flex", alignItems: "center", gap: 6,
  }),
  content: { padding: "32px 40px", maxWidth: 1100, margin: "0 auto" },
};

// ── LOGICAL VIEW ──────────────────────────────────────────────────────────────
function LogicalView() {
  const layers = [
    {
      label: "CAPA FÍSICA — Dispositivo en el Rompeolas",
      color: "#0B4F8A",
      bg: "rgba(11,79,138,0.15)",
      items: [
        { name: "Placa de Presión", desc: "Placa rígida linear, geometría cóncava", icon: "▣" },
        { name: "Cilindro Hidráulico", desc: "Conversión movimiento → presión de fluido", icon: "⬛" },
        { name: "Acumulador Hidráulico", desc: "Buffer de presión, suaviza intermitencia", icon: "⬚" },
        { name: "Motor + Generador", desc: "Imanes permanentes, 3–5 kW/unidad", icon: "⚙" },
        { name: "Inversor AC", desc: "Conversión a corriente alterna inyectable", icon: "⚡" },
      ]
    },
    {
      label: "CAPA IoT — Sensores y Control Local",
      color: "#1A6B3C",
      bg: "rgba(26,107,60,0.15)",
      items: [
        { name: "Sensores de Presión", desc: "Monitoreo sistema hidráulico en tiempo real", icon: "◎" },
        { name: "Sensor de Vibración", desc: "Detección de anomalías mecánicas", icon: "〜" },
        { name: "Sensores Temp/Salinidad", desc: "Condiciones ambientales del dispositivo", icon: "◉" },
        { name: "Microcontrolador ESP32", desc: "Control local, firmware C++, failsafe", icon: "▦" },
        { name: "Módulo LoRaWAN/NB-IoT", desc: "Transmisión segura a la nube (MQTT/TLS)", icon: "📡" },
      ]
    },
    {
      label: "CAPA BACKEND — Procesamiento y API",
      color: "#7B3F00",
      bg: "rgba(123,63,0,0.15)",
      items: [
        { name: "Apache Kafka", desc: "Ingesta streaming 24/7 de todos los sensores", icon: "⇉" },
        { name: "Python ML Engine", desc: "Pandas, NumPy, Scikit-learn — predicción fallas", icon: "🧠" },
        { name: "Spring Boot API", desc: "RESTful — lógica negocio, autenticación", icon: "☕" },
        { name: "TimescaleDB", desc: "PostgreSQL extendido para series temporales", icon: "🗃" },
        { name: "SHOA Data Connector", desc: "Ingesta en tiempo real datos oceanográficos", icon: "🌊" },
      ]
    },
    {
      label: "CAPA FRONTEND — Interfaz SaaS",
      color: "#4A1080",
      bg: "rgba(74,16,128,0.15)",
      items: [
        { name: "React.js Dashboard", desc: "Monitoreo en tiempo real, alertas, KPIs", icon: "⬡" },
        { name: "Grafana Panels", desc: "Visualización series temporales operativas", icon: "📊" },
        { name: "Módulo de Reportes", desc: "Generación automática de informes periódicos", icon: "📋" },
        { name: "Sistema de Alertas", desc: "Notificaciones fallas, mantenimiento predictivo", icon: "🔔" },
      ]
    },
  ];

  return (
    <div>
      <ViewHeader
        title="Vista Lógica"
        desc="Descomposición del sistema en capas funcionales. Muestra qué componentes existen, su responsabilidad y cómo se organizan desde el dispositivo físico hasta la interfaz de usuario."
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {layers.map((layer, li) => (
          <div key={li} style={{
            border: `1px solid ${layer.color}`,
            borderLeft: `4px solid ${layer.color}`,
            borderRadius: 10,
            background: layer.bg,
            padding: "16px 20px",
          }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, color: layer.color === "#0B4F8A" ? colors.foam : layer.color === "#1A6B3C" ? "#4CAF50" : layer.color === "#7B3F00" ? "#FF9800" : "#CE93D8", marginBottom: 14, textTransform: "uppercase" }}>
              {layer.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {layer.items.map((item, ii) => (
                <div key={ii} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8, padding: "10px 14px", minWidth: 160,
                }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{item.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#E8F4FD", marginBottom: 3 }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: "#7BB3D4", lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Arrow label="Flujo de datos: Dispositivo → IoT → Backend → Frontend" />
    </div>
  );
}

// ── PROCESS VIEW ──────────────────────────────────────────────────────────────
function ProcessView() {
  const flows = [
    {
      title: "Flujo de Generación Energética",
      color: colors.foam,
      steps: [
        { label: "Impacto de ola", detail: "Oleaje 0.5–3.0m Hs impacta placa rígida", icon: "🌊" },
        { label: "Desplazamiento lineal", detail: "Placa se desplaza → empuja pistón hidráulico", icon: "→" },
        { label: "Presurización", detail: "Fluido a presión se almacena en acumulador", icon: "⬛" },
        { label: "Generación", detail: "Motor hidráulico → generador imanes permanentes", icon: "⚙" },
        { label: "Conversión AC", detail: "Inversor → corriente alterna 220V / 50Hz", icon: "⚡" },
        { label: "Distribución", detail: "Red local o baterías de almacenamiento", icon: "🏘" },
      ]
    },
    {
      title: "Flujo de Datos IoT → Cloud",
      color: "#4CAF50",
      steps: [
        { label: "Lectura sensores", detail: "ESP32 lee presión, vibración, temp, corriente cada 100ms", icon: "📡" },
        { label: "Validación local", detail: "Firmware valida rangos, activa failsafe si necesario", icon: "✓" },
        { label: "Transmisión MQTT/TLS", detail: "Datos encriptados vía LoRaWAN a broker cloud", icon: "🔒" },
        { label: "Ingesta Kafka", detail: "Stream time-series ingresado en tiempo real", icon: "⇉" },
        { label: "Procesamiento ML", detail: "Modelo detecta anomalías, proyecta producción", icon: "🧠" },
        { label: "Dashboard + alertas", detail: "Visualización React + notificación automática", icon: "📊" },
      ]
    },
    {
      title: "Flujo de Mantenimiento Predictivo",
      color: "#FF9800",
      steps: [
        { label: "Datos históricos", detail: "TimescaleDB acumula series temporales de sensores", icon: "🗃" },
        { label: "Entrenamiento modelo", detail: "Scikit-learn reentrenado periódicamente con nuevos datos", icon: "🔄" },
        { label: "Predicción falla", detail: "Modelo detecta patrón anómalo de vibración/presión", icon: "⚠" },
        { label: "Aislamiento automático", detail: "ESP32 desconecta unidad afectada sin detener el sistema", icon: "🔌" },
        { label: "Alerta operador", detail: "Notificación push con diagnóstico y recomendación", icon: "🔔" },
        { label: "Reporte mantención", detail: "PDF auto-generado con historial y acción sugerida", icon: "📋" },
      ]
    },
  ];

  return (
    <div>
      <ViewHeader
        title="Vista de Procesos"
        desc="Muestra cómo fluyen los datos y la energía en tiempo real. Tres procesos concurrentes operan simultáneamente: generación energética, monitoreo IoT y mantenimiento predictivo."
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {flows.map((flow, fi) => (
          <div key={fi} style={{ border: `1px solid rgba(255,255,255,0.08)`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: flow.color, display: "inline-block", marginRight: 10 }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: flow.color }}>{flow.title}</span>
            </div>
            <div style={{ padding: "20px", display: "flex", flexWrap: "wrap", gap: 0, alignItems: "center" }}>
              {flow.steps.map((step, si) => (
                <div key={si} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{
                    background: "rgba(255,255,255,0.04)", border: `1px solid ${flow.color}33`,
                    borderRadius: 8, padding: "10px 14px", textAlign: "center", minWidth: 120,
                  }}>
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{step.icon}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#E8F4FD", marginBottom: 4 }}>{step.label}</div>
                    <div style={{ fontSize: 10, color: "#7BB3D4", lineHeight: 1.4 }}>{step.detail}</div>
                  </div>
                  {si < flow.steps.length - 1 && (
                    <div style={{ color: flow.color, fontSize: 20, padding: "0 8px", fontWeight: 700 }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── DEV VIEW ──────────────────────────────────────────────────────────────────
function DevView() {
  const stack = [
    { layer: "Hardware / Firmware", color: "#1565C0", items: [
      { name: "ESP32", role: "Microcontrolador principal", tech: "C++ / Arduino Framework" },
      { name: "Sensores I2C/SPI", role: "Presión, vibración, temperatura", tech: "Drivers C++" },
      { name: "LoRaWAN Module", role: "Comunicación LPWAN", tech: "AT Commands / MQTT" },
    ]},
    { layer: "Broker & Ingesta", color: "#00838F", items: [
      { name: "Apache Kafka", role: "Message broker streaming", tech: "Topics por dispositivo/sensor" },
      { name: "MQTT Broker", role: "Recepción mensajes IoT", tech: "TLS 1.3 encriptado" },
      { name: "SHOA API Client", role: "Datos oceanográficos tiempo real", tech: "Python REST client" },
    ]},
    { layer: "Backend & ML", color: "#2E7D32", items: [
      { name: "Spring Boot", role: "API RESTful principal", tech: "Java 17 — JWT Auth" },
      { name: "Python ML Engine", role: "Predicción fallas y producción", tech: "Scikit-learn, Pandas, NumPy" },
      { name: "TimescaleDB", role: "Base datos series temporales", tech: "PostgreSQL 16 + extensión" },
      { name: "Object Storage", role: "Backups y archivos", tech: "Oracle Cloud OCI" },
    ]},
    { layer: "Frontend & Visualización", color: "#6A1B9A", items: [
      { name: "React.js", role: "Dashboard SaaS principal", tech: "React 18, Hooks, Context API" },
      { name: "Grafana", role: "Paneles operativos tiempo real", tech: "Datasource TimescaleDB" },
      { name: "Report Engine", role: "Generación reportes PDF automáticos", tech: "Spring Boot + iText" },
    ]},
    { layer: "Infraestructura Cloud", color: "#BF360C", items: [
      { name: "Oracle Cloud Compute", role: "Instancias Ubuntu 22.04", tech: "OCI — gratuito académico" },
      { name: "Autonomous Database", role: "Base datos gestionada", tech: "Oracle ATP" },
      { name: "Load Balancer", role: "Alta disponibilidad API", tech: "OCI LB" },
    ]},
  ];

  return (
    <div>
      <ViewHeader
        title="Vista de Desarrollo"
        desc="Organización del stack técnico por capas. Muestra las tecnologías específicas, su rol en el sistema y cómo se relacionan entre sí desde el firmware del dispositivo hasta la nube."
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {stack.map((layer, li) => (
          <div key={li} style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${layer.color}44` }}>
            <div style={{ background: layer.color, padding: "10px 18px" }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, color: "#fff", textTransform: "uppercase" }}>{layer.layer}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, padding: 14, background: `${layer.color}11` }}>
              {layer.items.map((item, ii) => (
                <div key={ii} style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8, padding: "10px 14px", minWidth: 200, flex: "1 1 200px",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#E8F4FD", marginBottom: 4 }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: "#A8D5F5", marginBottom: 4 }}>{item.role}</div>
                  <div style={{ fontSize: 10, color: "#F9A825", fontFamily: "monospace", background: "rgba(249,168,37,0.08)", borderRadius: 4, padding: "2px 6px", display: "inline-block" }}>{item.tech}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PHYSICAL VIEW ─────────────────────────────────────────────────────────────
function PhysicalView() {
  const nodes = [
    {
      zone: "🌊 ZONA COSTERA — Dispositivo físico",
      color: "#1565C0",
      nodes: [
        { name: "Unidad SW-001..N", spec: "ESP32 + sensores + LoRaWAN", detail: "Cada unidad opera de forma autónoma e independiente. Fallo de una no afecta al resto." },
        { name: "Baterías locales", spec: "Buffer energético de 2–4h", detail: "Garantiza continuidad ante peak de demanda o baja del oleaje." },
        { name: "Gateway LoRaWAN", spec: "Rango 5–15 km, 1 por caleta", detail: "Concentra mensajes de todas las unidades. Redundancia mediante 2 gateways." },
      ]
    },
    {
      zone: "🌐 ZONA CLOUD — Oracle Cloud (OCI)",
      color: "#BF360C",
      nodes: [
        { name: "MQTT Broker (VM-01)", spec: "Ubuntu 22.04, 2 vCPU, 8GB RAM", detail: "Recibe todos los mensajes IoT. TLS 1.3. Alta disponibilidad con failover." },
        { name: "Kafka Cluster (VM-02)", spec: "Ubuntu 22.04, 4 vCPU, 16GB RAM", detail: "3 brokers, replicación factor 2. Topics por dispositivo y por tipo de sensor." },
        { name: "Backend API (VM-03)", spec: "Spring Boot, 2 vCPU, 8GB RAM", detail: "API RESTful. Load balancer OCI. Autoscaling según carga." },
        { name: "ML Engine (VM-04)", spec: "Python 3.11, 4 vCPU, 16GB RAM", detail: "Jobs periódicos de reentrenamiento. Modelos versionados en Object Storage." },
        { name: "TimescaleDB (ATP)", spec: "Oracle Autonomous DB, 2 OCPU", detail: "Series temporales con retención 5 años. Backup automático diario." },
        { name: "Frontend (VM-05)", spec: "React + Nginx, 1 vCPU, 4GB RAM", detail: "CDN para assets estáticos. HTTPS forzado. Grafana en subdominio." },
      ]
    },
    {
      zone: "👤 ZONA CLIENTE — Acceso del operador",
      color: "#2E7D32",
      nodes: [
        { name: "Dashboard web", spec: "Navegador — HTTPS", detail: "Municipio o institución accede vía browser. Sin instalación de software." },
        { name: "Alertas móviles", spec: "Push notifications", detail: "Alertas críticas enviadas al equipo de mantención en tiempo real." },
        { name: "Reportes automáticos", spec: "PDF mensual por email", detail: "Resumen de producción, fallas, eficiencia y proyección para el siguiente mes." },
      ]
    },
  ];

  return (
    <div>
      <ViewHeader
        title="Vista Física"
        desc="Mapeo del sistema sobre la infraestructura real. Muestra cómo los componentes se despliegan en dispositivos físicos en costa, servidores cloud y dispositivos de usuario final."
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {nodes.map((zone, zi) => (
          <div key={zi} style={{ border: `1px solid ${zone.color}55`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ background: zone.color, padding: "12px 20px" }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: 0.5 }}>{zone.zone}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, padding: 16, background: `${zone.color}0A` }}>
              {zone.nodes.map((node, ni) => (
                <div key={ni} style={{
                  flex: "1 1 240px", background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${zone.color}33`, borderRadius: 8, padding: "12px 16px",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#E8F4FD", marginBottom: 4 }}>{node.name}</div>
                  <div style={{ fontSize: 10, color: colors.gold, fontFamily: "monospace", marginBottom: 6, background: "rgba(249,168,37,0.1)", borderRadius: 4, padding: "2px 6px", display: "inline-block" }}>{node.spec}</div>
                  <div style={{ fontSize: 11, color: "#7BB3D4", lineHeight: 1.5 }}>{node.detail}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: "12px 16px", background: "rgba(26,74,122,0.3)", borderRadius: 8, border: "1px solid rgba(26,74,122,0.6)" }}>
        <span style={{ fontSize: 12, color: "#7BB3D4" }}>
          <strong style={{ color: colors.foam }}>Nota de escalabilidad:</strong> Cada unidad SW agregada solo requiere configuración en Kafka y TimescaleDB. El backend y el frontend escalan horizontalmente sin rediseño. De 25 a 100 unidades: mismo stack, mayor throughput.
        </span>
      </div>
    </div>
  );
}

// ── SCENARIOS VIEW ────────────────────────────────────────────────────────────
function ScenariosView() {
  const [active, setActive] = useState(0);
  const scenarios = [
    {
      id: "UC-01", title: "Generación y distribución normal",
      actor: "Sistema autónomo", trigger: "Oleaje ≥ 0.5m impacta el rompeolas",
      steps: [
        "Ola impacta placa de presión → desplazamiento lineal del pistón",
        "Acumulador hidráulico presuriza el fluido (suaviza intermitencia)",
        "Motor hidráulico gira generador de imanes permanentes",
        "Inversor convierte a 220V AC → inyecta a red local o carga baterías",
        "ESP32 registra voltaje, corriente y frecuencia cada 100ms",
        "Datos se transmiten vía MQTT/TLS al broker cloud",
        "Dashboard actualiza kWh producidos en tiempo real",
      ],
      outcome: "Energía disponible para escuela, posta rural y alumbrado público de forma continua.",
      color: colors.foam,
    },
    {
      id: "UC-02", title: "Detección y aislamiento de falla",
      actor: "Sistema ML + ESP32", trigger: "Sensor detecta patrón anómalo de vibración",
      steps: [
        "Sensor de vibración detecta frecuencia fuera del rango normal (±2σ)",
        "ESP32 activa protocolo de diagnóstico local",
        "Si anomalía persiste >30s: desconexión automática de la unidad afectada",
        "Resto de unidades continúan operando sin interrupción",
        "Kafka registra evento con timestamp y métricas de contexto",
        "Modelo ML clasifica el tipo de falla probable",
        "Se genera alerta push al operador con diagnóstico y acción sugerida",
        "Se crea ticket de mantención con historial completo de la unidad",
      ],
      outcome: "Falla contenida sin afectar producción total. Operador notificado en < 2 minutos.",
      color: "#FF9800",
    },
    {
      id: "UC-03", title: "Monitoreo y reporte municipal",
      actor: "Operador municipal", trigger: "Acceso al dashboard web",
      steps: [
        "Operador accede a dashboard.sustainablewaves.cl con credenciales",
        "Visualiza mapa de unidades activas/inactivas en tiempo real",
        "Selecciona rango de fechas para consultar histórico de producción",
        "Sistema consulta TimescaleDB y genera gráficos de series temporales",
        "Operador solicita reporte mensual en PDF",
        "Backend genera PDF con resumen de kWh, eficiencia, fallas y proyección",
        "Reporte enviado por email y disponible para descarga",
      ],
      outcome: "Municipio tiene trazabilidad completa de la energía generada para rendición de cuentas.",
      color: "#CE93D8",
    },
    {
      id: "UC-04", title: "Integración datos SHOA para proyección",
      actor: "Sistema automático", trigger: "Job programado cada 6 horas",
      steps: [
        "Servicio Python consulta API SHOA con parámetros de zona geográfica",
        "Descarga Hs (altura significativa) y Tp (período de pico) actualizados",
        "Aplica fórmula P = (ρ·g²)/(64π) · Hs² · Tp para cada unidad",
        "Compara producción real vs. producción teórica del período",
        "Calcula eficiencia operativa de cada unidad",
        "Actualiza proyección de producción para las próximas 48 horas",
        "Dashboard muestra forecast con banda de confianza",
      ],
      outcome: "Municipio puede planificar el suministro energético con 48h de anticipación.",
      color: "#4CAF50",
    },
  ];

  const sc = scenarios[active];
  return (
    <div>
      <ViewHeader
        title="Vista de Escenarios (+1)"
        desc="Los escenarios de uso integran todas las demás vistas. Muestran cómo el sistema opera desde la perspectiva del actor, validando que la arquitectura cubre los casos de uso reales."
      />
      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        {scenarios.map((s, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            padding: "10px 16px", borderRadius: 8, cursor: "pointer",
            border: `1px solid ${i === active ? s.color : "rgba(255,255,255,0.1)"}`,
            background: i === active ? `${s.color}22` : "rgba(255,255,255,0.03)",
            color: i === active ? s.color : "#7BB3D4",
            fontSize: 12, fontWeight: i === active ? 700 : 500,
            transition: "all 0.2s",
          }}>
            <span style={{ fontFamily: "monospace", marginRight: 6, fontSize: 11, opacity: 0.7 }}>{s.id}</span>
            {s.title}
          </button>
        ))}
      </div>
      <div style={{ border: `1px solid ${sc.color}44`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ background: `${sc.color}22`, borderBottom: `1px solid ${sc.color}33`, padding: "16px 20px" }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div><span style={{ fontSize: 10, color: "#7BB3D4", letterSpacing: 1, textTransform: "uppercase" }}>Actor</span><div style={{ fontSize: 13, fontWeight: 700, color: "#E8F4FD", marginTop: 2 }}>{sc.actor}</div></div>
            <div><span style={{ fontSize: 10, color: "#7BB3D4", letterSpacing: 1, textTransform: "uppercase" }}>Trigger</span><div style={{ fontSize: 13, fontWeight: 700, color: "#E8F4FD", marginTop: 2 }}>{sc.trigger}</div></div>
          </div>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#7BB3D4", textTransform: "uppercase", marginBottom: 14 }}>Flujo de pasos</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {sc.steps.map((step, si) => (
              <div key={si} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{
                  width: 24, height: 24, borderRadius: "50%", background: `${sc.color}33`,
                  border: `1px solid ${sc.color}`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, color: sc.color, flexShrink: 0,
                }}>{si + 1}</div>
                <div style={{ fontSize: 13, color: "#C8E6FA", lineHeight: 1.6, paddingTop: 3 }}>{step}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, padding: "12px 16px", background: `${sc.color}15`, border: `1px solid ${sc.color}44`, borderRadius: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: sc.color, marginRight: 8 }}>✓ RESULTADO:</span>
            <span style={{ fontSize: 12, color: "#E8F4FD" }}>{sc.outcome}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SHARED COMPONENTS ─────────────────────────────────────────────────────────
function ViewHeader({ title, desc }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 800, color: "#E8F4FD", letterSpacing: -0.5 }}>{title}</h2>
      <p style={{ margin: 0, fontSize: 13, color: "#7BB3D4", lineHeight: 1.6, maxWidth: 700 }}>{desc}</p>
      <div style={{ height: 2, background: `linear-gradient(90deg, ${colors.wave}, transparent)`, marginTop: 16 }} />
    </div>
  );
}

function Arrow({ label }) {
  return (
    <div style={{ textAlign: "center", padding: "16px 0", color: "#7BB3D4", fontSize: 12, letterSpacing: 1 }}>
      <span style={{ marginRight: 8, fontSize: 18, color: colors.foam }}>↕</span>{label}
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [activeView, setActiveView] = useState("logical");

  const renderView = () => {
    switch (activeView) {
      case "logical":   return <LogicalView />;
      case "process":   return <ProcessView />;
      case "dev":       return <DevView />;
      case "physical":  return <PhysicalView />;
      case "scenarios": return <ScenariosView />;
      default:          return <LogicalView />;
    }
  };

  return (
    <div style={style.wrap}>
      <div style={style.header}>
        <div style={style.brand}>Sustainable Waves — Arquitectura del Sistema</div>
        <div style={style.titleRow}>
          <div style={style.title}>Modelo 4+1 de Kruchten</div>
        </div>
        <div style={style.subtitle}>Vista completa de la arquitectura tecnológica del sistema de generación undimotriz inteligente</div>
      </div>
      <div style={style.tabs}>
        {views.map(v => (
          <button key={v.id} onClick={() => setActiveView(v.id)} style={style.tab(activeView === v.id)}>
            <span style={{ fontSize: 16 }}>{v.icon}</span>
            <span>{v.label}</span>
          </button>
        ))}
      </div>
      <div style={style.content}>
        {renderView()}
      </div>
    </div>
  );
}