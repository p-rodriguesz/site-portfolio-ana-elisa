import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { collections } from "../data/content";
import LookItem from "./LookItem";
import FlowerAnimation from "./FlowerAnimation";
import styles from "./Collection.module.css";

export default function Collection() {
  const [titleRef, titleInView] = useInView();
  const [activeCollectionId, setActiveCollectionId] = useState(collections[0]?.id || "");
  const [isDramaInfoOpen, setIsDramaInfoOpen] = useState(false);
  const [isSecondCollectionOpen, setIsSecondCollectionOpen] = useState(false);

  const activeCollection =
    collections.find((collection) => collection.id === activeCollectionId) || collections[0];

  const handleCollectionChange = (collectionId) => {
    setActiveCollectionId(collectionId);
    setIsDramaInfoOpen(false);
    setIsSecondCollectionOpen(false);
  };

  if (!activeCollection) return null;

  const isDramaCollection = activeCollection.id === "colecao-01";
  const introRegionId = `intro-${activeCollection.id}`;
  const secondCollectionRegionId = `second-collection-${activeCollection.id}`;
  const firstLook = activeCollection.looks?.[0];
  const secondLook = isDramaCollection ? activeCollection.looks?.[1] : null;
  const visibleLooks = isDramaCollection ? activeCollection.looks.slice(2) : activeCollection.looks;
  const isIntroVisible = !isDramaCollection || isDramaInfoOpen;

  return (
    <section className={styles.collection} id="collection">
      {collections.length > 1 && (
        <div className={styles.collectionSelector} role="tablist" aria-label="Selecionar coleção">
          {collections.map((collection) => {
            const isActive = collection.id === activeCollection.id;

            return (
              <button
                key={collection.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`collection-panel-${collection.id}`}
                className={`${styles.collectionButton} ${isActive ? styles.collectionButtonActive : ""}`}
                onClick={() => handleCollectionChange(collection.id)}
              >
                {collection.subtitle || collection.title}
              </button>
            );
          })}
        </div>
      )}

      <div id={`collection-panel-${activeCollection.id}`} role="tabpanel">
        {/* Título */}
        <div
          ref={titleRef}
          className={`${styles.title} ${titleInView ? styles.visible : ""}`}
        >
          <FlowerAnimation title={activeCollection.title} />

          {isDramaCollection && (
            <button
              type="button"
              className={styles.titleToggle}
              aria-expanded={isDramaInfoOpen}
              aria-controls={introRegionId}
              onClick={() => setIsDramaInfoOpen((prev) => !prev)}
            >
              {isDramaInfoOpen ? "Fechar editorial da coleção" : "Ler editorial da coleção"}
            </button>
          )}
        </div>

        <div
          id={introRegionId}
          role="region"
          aria-label="Introdução da coleção"
          aria-hidden={!isIntroVisible}
          className={`${styles.introPanel} ${isIntroVisible ? styles.introPanelOpen : styles.introPanelClosed}`}
        >
          <div className={styles.introPanelInner}>
            {activeCollection.moodboard && (
              <p className={styles.moodboardLabel}>Moodboard</p>
            )}

            {/* Moodboard full width */}
            {activeCollection.moodboard && (
              <div className={styles.fullWidth}>
                <img src={activeCollection.moodboard} alt={`Moodboard — ${activeCollection.title}`} />
              </div>
            )}

            {/* Descrição da coleção */}
            <div className={styles.description}>
              <h3>{activeCollection.subtitle}</h3>
              <p>{activeCollection.description}</p>
              {isDramaCollection && activeCollection.extraInfo && (
                <p className={styles.moreInfoPanel}>{activeCollection.extraInfo}</p>
              )}
            </div>

            {/* Croquis full width */}
            {activeCollection.croquis && (
              <div className={styles.fullWidth}>
                <img src={activeCollection.croquis} alt={`Croquis — ${activeCollection.title}`} />
              </div>
            )}

            {/* Primeiro look dentro da introducao */}
            {/* Primeiro look dentro da introdução */}
            {isDramaCollection && firstLook && (
              <LookItem key={firstLook.id} look={firstLook} reverse={false} />
            )}
          </div>
        </div>

        {isDramaCollection && secondLook && (
          <section className={styles.secondCollectionSection} aria-label="Segunda coleção">
            <h2 className={styles.secondCollectionTitle}>SEGUNDA COLEÇÃO</h2>

            <button
              type="button"
              className={styles.secondCollectionToggle}
              aria-expanded={isSecondCollectionOpen}
              aria-controls={secondCollectionRegionId}
              onClick={() => setIsSecondCollectionOpen((prev) => !prev)}
            >
              {isSecondCollectionOpen ? "Encerrar capítulo dois" : "Abrir capítulo dois"}
            </button>

            <div
              id={secondCollectionRegionId}
              role="region"
              aria-label="Segundo look da segunda coleção"
              aria-hidden={!isSecondCollectionOpen}
              className={`${styles.introPanel} ${isSecondCollectionOpen ? styles.introPanelOpen : styles.introPanelClosed}`}
            >
              <div className={styles.introPanelInner}>
                <LookItem key={secondLook.id} look={secondLook} reverse={false} />
              </div>
            </div>
          </section>
        )}

        {/* Looks restantes */}
        {visibleLooks.map((look, i) => (
          <LookItem key={look.id} look={look} reverse={(i + 2) % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
