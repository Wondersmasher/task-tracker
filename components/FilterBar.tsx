import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FilterType } from '../types';

interface Props {
  filter: FilterType;
  counts: Record<FilterType, number>;
  onSelect: (f: FilterType) => void;
}

const FILTERS: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
];

export function FilterBar({ filter, counts, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {FILTERS.map(({ key, label }) => (
        <TouchableOpacity
          key={key}
          style={[styles.tab, filter === key && styles.tabActive]}
          onPress={() => onSelect(key)}
          activeOpacity={0.7}
        >
          <Text style={[styles.label, filter === key && styles.labelActive]}>
            {label}
          </Text>
          <View style={[styles.badge, filter === key && styles.badgeActive]}>
            <Text style={[styles.badgeText, filter === key && styles.badgeTextActive]}>
              {counts[key]}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    padding: 3,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    gap: 5,
  },
  tabActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },
  labelActive: {
    color: '#111827',
    fontWeight: '600',
  },
  badge: {
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  badgeActive: {
    backgroundColor: '#EEF2FF',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  badgeTextActive: {
    color: '#6366F1',
  },
});
