// McDemo/AccessibilityContext.js
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { AccessibilityInfo, AppState, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccessibilityContext = createContext();

const ACCESSIBILITY_MODE_KEY = '@app_accessible_mode_enabled';
const HAS_SEEN_OFFER_KEY = '@app_has_seen_accessibility_offer';

export const AccessibilityProvider = ({ children }) => {
  const [isNativeScreenReaderEnabled, setIsNativeScreenReaderEnabled] = useState(false);
  const [isAppAccessibleModeEnabled, setIsAppAccessibleModeEnabled] = useState(false);
  const [hasSeenAccessibilityOffer, setHasSeenAccessibilityOffer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowAccessibilityOfferManually, setShouldShowAccessibilityOfferManually] = useState(false);

  const initializeAccessibilityState = useCallback(async () => {
    setIsLoading(true);
    try {
      const nativeEnabled = await AccessibilityInfo.isScreenReaderEnabled();
      setIsNativeScreenReaderEnabled(nativeEnabled);
      console.log('(Context) Native screen reader enabled:', nativeEnabled);

      const storedAppMode = await AsyncStorage.getItem(ACCESSIBILITY_MODE_KEY);
      const appModeEnabled = storedAppMode === 'true';
      setIsAppAccessibleModeEnabled(nativeEnabled ? false : appModeEnabled);
      console.log('(Context) App accessible mode loaded:', nativeEnabled ? false : appModeEnabled);

      // OPCIONAL: podrías remover esta lectura si quieres evitar cualquier persistencia
      const storedOfferSeen = await AsyncStorage.getItem(HAS_SEEN_OFFER_KEY);
      console.log('(Context) Has seen accessibility offer (persisted):', storedOfferSeen === 'true');
    } catch (error) {
      console.error("(Context) Failed to load accessibility state:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const markOfferAsSeen = useCallback(async () => {
    setShouldShowAccessibilityOfferManually(false);
    setHasSeenAccessibilityOffer(true);
    try {
      await AsyncStorage.setItem(HAS_SEEN_OFFER_KEY, 'true');
      console.log('(Context) Marked accessibility offer as seen.');
    } catch (error) {
      console.error("(Context) Failed to save offer seen status:", error);
    }
  }, []);

  const resetAccessibilityOffer = useCallback(async () => {
    setHasSeenAccessibilityOffer(false);
    setShouldShowAccessibilityOfferManually(false);
    try {
      await AsyncStorage.removeItem(HAS_SEEN_OFFER_KEY);
      console.log('(Context) Oferta de accesibilidad restablecida.');
    } catch (error) {
      console.error('(Context) Error al restablecer la oferta de accesibilidad:', error);
    }
  }, []);

  const toggleAppAccessibleMode = useCallback(async () => {
    if (isNativeScreenReaderEnabled || isLoading) {
      console.log('(Context) Cannot toggle App Accessible Mode because Native SR is ON or state is loading.');
      return;
    }
    const newValue = !isAppAccessibleModeEnabled;
    setIsAppAccessibleModeEnabled(newValue);
    setShouldShowAccessibilityOfferManually(false);
    try {
      await AsyncStorage.setItem(ACCESSIBILITY_MODE_KEY, newValue.toString());
      console.log('(Context) App Accessible Mode Toggled:', newValue);
      if (!hasSeenAccessibilityOffer) {
        markOfferAsSeen();
      }
    } catch (error) {
      console.error("(Context) Failed to save app accessible mode:", error);
      setIsAppAccessibleModeEnabled(!newValue);
    }
  }, [isAppAccessibleModeEnabled, isNativeScreenReaderEnabled, isLoading, hasSeenAccessibilityOffer, markOfferAsSeen]);

  const triggerManualAccessibilityOffer = useCallback(() => {
    console.log(`>>> (Context) triggerManualAccessibilityOffer llamado. Condiciones: isLoading=${isLoading}, nativeSR=${isNativeScreenReaderEnabled}, seenOffer=${hasSeenAccessibilityOffer}`);
    if (!isLoading && !isNativeScreenReaderEnabled && !hasSeenAccessibilityOffer) {
      console.log('>>> (Context) Condiciones CUMPLIDAS. Poniendo shouldShowAccessibilityOfferManually = true');
      setShouldShowAccessibilityOfferManually(true);
    } else {
      console.log('>>> (Context) Condiciones NO CUMPLIDAS. No se activa el estado manual.');
      setShouldShowAccessibilityOfferManually(false);
    }
  }, [isLoading, isNativeScreenReaderEnabled, hasSeenAccessibilityOffer]);

  // Reinicia `hasSeenAccessibilityOffer` y `shouldShowAccessibilityOfferManually` al iniciar
  useEffect(() => {
    initializeAccessibilityState();
    setHasSeenAccessibilityOffer(false);
    setShouldShowAccessibilityOfferManually(false);

    const screenReaderSubscription = AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      (nativeEnabled) => {
        console.log('(Context) Native screen reader status changed:', nativeEnabled);
        setIsNativeScreenReaderEnabled(nativeEnabled);
        if (nativeEnabled) {
          setIsAppAccessibleModeEnabled(false);
          AsyncStorage.setItem(ACCESSIBILITY_MODE_KEY, 'false');
        }
      }
    );

    return () => {
      screenReaderSubscription.remove();
    };
  }, [initializeAccessibilityState]);

  const value = {
    isLoading,
    isNativeScreenReaderEnabled,
    isAppAccessibleModeEnabled,
    hasSeenAccessibilityOffer,
    toggleAppAccessibleMode,
    markOfferAsSeen,
    resetAccessibilityOffer,
    shouldShowAccessibilityOfferManually,
    triggerManualAccessibilityOffer,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
