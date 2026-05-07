import { createFileRoute } from '@tanstack/react-router'
import type { CSSProperties } from 'react'
import { getPokemon } from '../../api/pokemon'

type PokemonData = {
    id?: number
    name?: string
    height?: number
    weight?: number
    base_experience?: number
    types?: Array<{
        slot?: number
        type?: {
            name?: string
        }
    }>
    abilities?: Array<{
        ability?: {
            name?: string
        }
    }>
    stats?: Array<{
        base_stat?: number
        stat?: {
            name?: string
        }
    }>
    moves?: Array<unknown>
    sprites?: {
        front_default?: string
        other?: {
            home?: {
                front_default?: string
            }
            dream_world?: {
                front_default?: string
            }
            'official-artwork'?: {
                front_default?: string
            }
        }
    }
}

const typeThemes: Record<string, { background: string; color: string }> = {
    bug: {
        background: 'linear-gradient(135deg, rgba(132,204,22,0.95), rgba(74,222,128,0.9))',
        color: '#052e16',
    },
    dark: {
        background: 'linear-gradient(135deg, rgba(71,85,105,0.95), rgba(30,41,59,0.95))',
        color: '#f8fafc',
    },
    dragon: {
        background: 'linear-gradient(135deg, rgba(129,140,248,0.95), rgba(59,130,246,0.9))',
        color: '#eef2ff',
    },
    electric: {
        background: 'linear-gradient(135deg, rgba(250,204,21,0.95), rgba(253,224,71,0.9))',
        color: '#422006',
    },
    fairy: {
        background: 'linear-gradient(135deg, rgba(244,114,182,0.95), rgba(251,207,232,0.9))',
        color: '#500724',
    },
    fighting: {
        background: 'linear-gradient(135deg, rgba(248,113,113,0.95), rgba(220,38,38,0.9))',
        color: '#fef2f2',
    },
    fire: {
        background: 'linear-gradient(135deg, rgba(251,146,60,0.95), rgba(239,68,68,0.9))',
        color: '#fff7ed',
    },
    flying: {
        background: 'linear-gradient(135deg, rgba(125,211,252,0.95), rgba(129,140,248,0.9))',
        color: '#082f49',
    },
    ghost: {
        background: 'linear-gradient(135deg, rgba(129,140,248,0.95), rgba(109,40,217,0.9))',
        color: '#eef2ff',
    },
    grass: {
        background: 'linear-gradient(135deg, rgba(74,222,128,0.95), rgba(34,197,94,0.9))',
        color: '#052e16',
    },
    ground: {
        background: 'linear-gradient(135deg, rgba(251,191,36,0.95), rgba(180,83,9,0.9))',
        color: '#451a03',
    },
    ice: {
        background: 'linear-gradient(135deg, rgba(125,211,252,0.95), rgba(45,212,191,0.9))',
        color: '#083344',
    },
    normal: {
        background: 'linear-gradient(135deg, rgba(226,232,240,0.95), rgba(148,163,184,0.9))',
        color: '#0f172a',
    },
    poison: {
        background: 'linear-gradient(135deg, rgba(192,132,252,0.95), rgba(147,51,234,0.9))',
        color: '#faf5ff',
    },
    psychic: {
        background: 'linear-gradient(135deg, rgba(244,114,182,0.95), rgba(236,72,153,0.9))',
        color: '#fff1f2',
    },
    rock: {
        background: 'linear-gradient(135deg, rgba(252,211,77,0.95), rgba(161,98,7,0.9))',
        color: '#451a03',
    },
    steel: {
        background: 'linear-gradient(135deg, rgba(148,163,184,0.95), rgba(100,116,139,0.9))',
        color: '#f8fafc',
    },
    water: {
        background: 'linear-gradient(135deg, rgba(56,189,248,0.95), rgba(37,99,235,0.9))',
        color: '#eff6ff',
    },
}

export const Route = createFileRoute('/pokemon/$id')({
    component: Pokemon,
    loader: async ({ params }) => {
        return getPokemon(params.id)
    },
})

const pageStyle: CSSProperties = {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    padding: '3rem 1.5rem',
    background:
        'radial-gradient(circle at top, rgba(99,102,241,0.35) 0%, rgba(15,23,42,1) 42%, rgba(2,6,23,1) 100%)',
    color: '#e2e8f0',
}

const backgroundLayerStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
}

const glowOneStyle: CSSProperties = {
    position: 'absolute',
    top: '-8rem',
    right: '-6rem',
    height: '20rem',
    width: '20rem',
    borderRadius: '999px',
    background: 'rgba(56,189,248,0.28)',
    filter: 'blur(110px)',
}

const glowTwoStyle: CSSProperties = {
    position: 'absolute',
    bottom: '-10rem',
    left: '-6rem',
    height: '22rem',
    width: '22rem',
    borderRadius: '999px',
    background: 'rgba(244,114,182,0.22)',
    filter: 'blur(120px)',
}

const glowThreeStyle: CSSProperties = {
    position: 'absolute',
    top: '30%',
    left: '45%',
    height: '16rem',
    width: '16rem',
    borderRadius: '999px',
    background: 'rgba(45,212,191,0.15)',
    filter: 'blur(100px)',
}

const cardStyle: CSSProperties = {
    position: 'relative',
    maxWidth: '1120px',
    margin: '0 auto',
    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
    borderRadius: '32px',
    background: 'linear-gradient(145deg, rgba(15,23,42,0.88), rgba(15,23,42,0.72))',
    border: '1px solid rgba(148,163,184,0.18)',
    boxShadow: '0 28px 90px rgba(2,6,23,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
    backdropFilter: 'blur(18px)',
}

const heroStyle: CSSProperties = {
    display: 'grid',
    gap: '2rem',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
}

const titleGroupStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

const eyebrowStyle: CSSProperties = {
    display: 'inline-flex',
    width: 'fit-content',
    padding: '0.4rem 0.75rem',
    borderRadius: '999px',
    background: 'rgba(129,140,248,0.16)',
    border: '1px solid rgba(129,140,248,0.28)',
    color: '#c7d2fe',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
}

const titleStyle: CSSProperties = {
    margin: '1rem 0 0',
    fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
    lineHeight: 1.02,
    letterSpacing: '-0.05em',
    color: '#f8fafc',
}

const subtitleStyle: CSSProperties = {
    margin: '1rem 0 0',
    maxWidth: '34rem',
    color: 'rgba(226,232,240,0.78)',
    fontSize: '1rem',
    lineHeight: 1.7,
}

const badgeBaseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.6rem 0.95rem',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.02em',
}

const badgeRowStyle: CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    marginTop: '1.5rem',
}

const numberBadgeStyle: CSSProperties = {
    ...badgeBaseStyle,
    background: 'rgba(248,250,252,0.1)',
    border: '1px solid rgba(248,250,252,0.14)',
    color: '#f8fafc',
}

const typeBadgeBaseStyle: CSSProperties = {
    ...badgeBaseStyle,
    background: 'rgba(148,163,184,0.14)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#e2e8f0',
}

const artPanelStyle: CSSProperties = {
    position: 'relative',
    minHeight: '320px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    borderRadius: '28px',
    overflow: 'hidden',
    background:
        'radial-gradient(circle at top, rgba(56,189,248,0.22) 0%, rgba(30,41,59,0.22) 40%, rgba(2,6,23,0.52) 100%)',
    border: '1px solid rgba(148,163,184,0.14)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 70px rgba(2,6,23,0.35)',
}

const artGlowStyle: CSSProperties = {
    position: 'absolute',
    inset: 'auto auto 15% 15%',
    height: '10rem',
    width: '10rem',
    borderRadius: '999px',
    background: 'rgba(96,165,250,0.28)',
    filter: 'blur(75px)',
}

const artStyle: CSSProperties = {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '340px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 24px 42px rgba(15,23,42,0.55))',
}

const fallbackArtStyle: CSSProperties = {
    position: 'relative',
    zIndex: 1,
    fontSize: '4.5rem',
    fontWeight: 800,
    letterSpacing: '-0.05em',
    color: 'rgba(248,250,252,0.9)',
}

const contentGridStyle: CSSProperties = {
    display: 'grid',
    gap: '1.5rem',
    marginTop: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
}

const panelStyle: CSSProperties = {
    padding: '1.5rem',
    borderRadius: '24px',
    background: 'rgba(15,23,42,0.58)',
    border: '1px solid rgba(148,163,184,0.14)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
}

const panelHeaderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '1rem',
    flexWrap: 'wrap',
}

const panelTitleStyle: CSSProperties = {
    margin: 0,
    fontSize: '1.25rem',
    color: '#f8fafc',
}

const panelCaptionStyle: CSSProperties = {
    margin: '0.35rem 0 0',
    color: 'rgba(148,163,184,0.9)',
    fontSize: '0.95rem',
}

const metricGridStyle: CSSProperties = {
    display: 'grid',
    gap: '1rem',
    marginTop: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
}

const metricCardStyle: CSSProperties = {
    padding: '1rem 1.1rem',
    borderRadius: '18px',
    background: 'linear-gradient(180deg, rgba(30,41,59,0.9), rgba(15,23,42,0.65))',
    border: '1px solid rgba(148,163,184,0.12)',
}

const metricLabelStyle: CSSProperties = {
    color: 'rgba(148,163,184,0.82)',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
}

const metricValueStyle: CSSProperties = {
    marginTop: '0.45rem',
    color: '#f8fafc',
    fontSize: '1.1rem',
    fontWeight: 700,
}

const sectionLabelStyle: CSSProperties = {
    margin: '1.5rem 0 0.85rem',
    color: 'rgba(148,163,184,0.82)',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
}

const pillRowStyle: CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
}

const abilityBadgeStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.7rem 0.95rem',
    borderRadius: '16px',
    background: 'rgba(30,41,59,0.84)',
    border: '1px solid rgba(148,163,184,0.14)',
    color: '#e2e8f0',
    fontWeight: 600,
}

const mutedTextStyle: CSSProperties = {
    margin: 0,
    color: 'rgba(148,163,184,0.9)',
    fontSize: '0.95rem',
}

const totalStatsStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.55rem 0.85rem',
    borderRadius: '999px',
    background: 'rgba(56,189,248,0.14)',
    border: '1px solid rgba(56,189,248,0.22)',
    color: '#bae6fd',
    fontSize: '0.85rem',
    fontWeight: 700,
}

const statsStackStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.95rem',
    marginTop: '1.5rem',
}

const statItemStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem',
}

const statHeaderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
}

const statNameStyle: CSSProperties = {
    color: '#f8fafc',
    fontSize: '0.95rem',
    fontWeight: 600,
}

const statValueStyle: CSSProperties = {
    color: '#bfdbfe',
    fontSize: '0.95rem',
    fontWeight: 700,
}

const statTrackStyle: CSSProperties = {
    height: '0.72rem',
    overflow: 'hidden',
    borderRadius: '999px',
    background: 'rgba(51,65,85,0.78)',
    border: '1px solid rgba(148,163,184,0.08)',
}

function formatLabel(value?: string) {
    if (!value) {
        return 'Unknown'
    }

    return value.replace(/[-_]/g, ' ').replace(/\b\w/g, (character) => character.toUpperCase())
}

function formatStatName(value?: string) {
    if (!value) {
        return 'Unknown'
    }

    if (value.toLowerCase() === 'hp') {
        return 'HP'
    }

    return formatLabel(value)
}

function formatMetric(value: number | undefined, divisor: number, unit: string) {
    if (value == null) {
        return 'Unknown'
    }

    return `${(value / divisor).toFixed(1)} ${unit}`
}

function getTypeBadgeStyle(typeName?: string): CSSProperties {
    const theme = typeThemes[typeName?.toLowerCase() ?? '']

    return {
        ...typeBadgeBaseStyle,
        background: theme?.background ?? typeBadgeBaseStyle.background,
        color: theme?.color ?? typeBadgeBaseStyle.color,
    }
}

function getStatFillStyle(value: number): CSSProperties {
    return {
        width: `${Math.min((value / 200) * 100, 100)}%`,
        height: '100%',
        borderRadius: '999px',
        background: 'linear-gradient(90deg, #22d3ee 0%, #818cf8 55%, #a78bfa 100%)',
        boxShadow: '0 0 24px rgba(129,140,248,0.28)',
    }
}

function Pokemon() {
    const { useParams, useLoaderData } = Route
    const { id } = useParams()
    const pokemon = useLoaderData() as PokemonData

    const artwork =
        pokemon.sprites?.other?.['official-artwork']?.front_default ??
        pokemon.sprites?.other?.home?.front_default ??
        pokemon.sprites?.other?.dream_world?.front_default ??
        pokemon.sprites?.front_default

    const types = [...(pokemon.types ?? [])].sort((left, right) => (left.slot ?? 0) - (right.slot ?? 0))
    const abilities = pokemon.abilities ?? []
    const stats = pokemon.stats ?? []
    const totalStats = stats.reduce((total, entry) => total + (entry.base_stat ?? 0), 0)

    const metrics = [
        { label: 'Height', value: formatMetric(pokemon.height, 10, 'm') },
        { label: 'Weight', value: formatMetric(pokemon.weight, 10, 'kg') },
        {
            label: 'Base XP',
            value: pokemon.base_experience != null ? String(pokemon.base_experience) : 'Unknown',
        },
        {
            label: 'Moves',
            value: pokemon.moves != null ? String(pokemon.moves.length) : 'Unknown',
        },
    ]

    return (
        <div style={pageStyle}>
            <div style={backgroundLayerStyle}>
                <div style={glowOneStyle} />
                <div style={glowTwoStyle} />
                <div style={glowThreeStyle} />
            </div>

            <article style={cardStyle}>
                <div style={heroStyle}>
                    <div style={titleGroupStyle}>
                        <span style={eyebrowStyle}>Pokedex Entry</span>
                        <h1 style={titleStyle}>{formatLabel(pokemon.name ?? `pokemon ${id}`)}</h1>
                        <p style={subtitleStyle}>
                            A polished snapshot of this Pokemon&apos;s typing, talents, and battle stats.
                        </p>

                        <div style={badgeRowStyle}>
                            <span style={numberBadgeStyle}>#{pokemon.id ?? id}</span>
                            {types.length > 0 ? (
                                types.map((entry) => (
                                    <span
                                        key={`${entry.type?.name ?? 'type'}-${entry.slot ?? 0}`}
                                        style={getTypeBadgeStyle(entry.type?.name)}
                                    >
                                        {formatLabel(entry.type?.name)}
                                    </span>
                                ))
                            ) : (
                                <span style={typeBadgeBaseStyle}>Unknown Type</span>
                            )}
                        </div>
                    </div>

                    <div style={artPanelStyle}>
                        <div style={artGlowStyle} />
                        {artwork ? (
                            <img
                                alt={formatLabel(pokemon.name ?? `pokemon ${id}`)}
                                src={artwork}
                                style={artStyle}
                            />
                        ) : (
                            <div style={fallbackArtStyle}>#{pokemon.id ?? id}</div>
                        )}
                    </div>
                </div>

                <div style={contentGridStyle}>
                    <section style={panelStyle}>
                        <div style={panelHeaderStyle}>
                            <div>
                                <h2 style={panelTitleStyle}>Overview</h2>
                                <p style={panelCaptionStyle}>Core details at a glance.</p>
                            </div>
                        </div>

                        <div style={metricGridStyle}>
                            {metrics.map((metric) => (
                                <div key={metric.label} style={metricCardStyle}>
                                    <div style={metricLabelStyle}>{metric.label}</div>
                                    <div style={metricValueStyle}>{metric.value}</div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <div style={sectionLabelStyle}>Abilities</div>
                            <div style={pillRowStyle}>
                                {abilities.length > 0 ? (
                                    abilities.map((entry) => (
                                        <span
                                            key={`${entry.ability?.name ?? 'ability'}-${entry.ability?.name ?? 0}`}
                                            style={abilityBadgeStyle}
                                        >
                                            {formatLabel(entry.ability?.name)}
                                        </span>
                                    ))
                                ) : (
                                    <p style={mutedTextStyle}>No abilities found.</p>
                                )}
                            </div>
                        </div>
                    </section>

                    <section style={panelStyle}>
                        <div style={panelHeaderStyle}>
                            <div>
                                <h2 style={panelTitleStyle}>Base Stats</h2>
                                <p style={panelCaptionStyle}>Battle-ready strengths and weaknesses.</p>
                            </div>

                            <span style={totalStatsStyle}>Total {totalStats}</span>
                        </div>

                        <div style={statsStackStyle}>
                            {stats.length > 0 ? (
                                stats.map((entry) => {
                                    const value = entry.base_stat ?? 0

                                    return (
                                        <div key={`${entry.stat?.name ?? 'stat'}-${entry.stat?.name ?? 0}`} style={statItemStyle}>
                                            <div style={statHeaderStyle}>
                                                <span style={statNameStyle}>{formatStatName(entry.stat?.name)}</span>
                                                <span style={statValueStyle}>{value}</span>
                                            </div>

                                            <div style={statTrackStyle}>
                                                <div style={getStatFillStyle(value)} />
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <p style={mutedTextStyle}>No stats available.</p>
                            )}
                        </div>
                    </section>
                </div>
            </article>
        </div>
    )
}
